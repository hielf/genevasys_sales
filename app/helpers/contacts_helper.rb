module ContactsHelper

  def new_contact(params)
    flag = true
    socid = params["socid"]
    ref = params["ref"]
    third_party = ThirdParty.find_by(ref: socid) if ref

    if Contact.find_by(ref: ref).nil?
      begin
        contact = third_party.contacts.find_by(firstname: params["firstname"], email: params["email"]) if third_party
        if contact
          contact.update(params.select{|x| Contact.attribute_names.index(x)})
        else
          contact = third_party.contacts.new(params.select{|x| Contact.attribute_names.index(x)})
          contact.save
        end
      rescue Exception => e
        flag = false
        p "new_contact error: #{e.message}"
        Rails.logger.warn "new_contact error: #{e.message}"
      end

    else
      contact = Contact.find_by(ref: ref)
      begin
        contact.update(params.select{|x| Contact.attribute_names.index(x)})
      rescue Exception => e
        flag = false
        p "exist_contact error: #{e.message}"
        Rails.logger.warn "exist_contact error: #{e.message}"
      end
    end

    return flag
  end

  # ApplicationController.helpers.init_contacts
  def init_contacts
    count = 0
    params = {limit: 0}
    status, data = ApplicationController.helpers.dolibarr_contacts(params)
    data.each do |params|
      next if params["socid"].nil?
      flag = ApplicationController.helpers.new_contact(params)
      break if flag == false
      count = count + 1
    end;0

    p count
  end

  def create_contact(params, user)
    # p params
    flag = false
    contact_id = nil
    socid = params[:socid]
    third_party = ThirdParty.find_by(ref: socid)
    exist_contact = third_party.contacts.find_by(firstname: params[:firstname], email: params[:email])

    if exist_contact.nil?
      method = "/contacts"
      status, data = ApplicationController.helpers.dolibarr_api_post(method, params, user)
      contact_id = data if status == 200
    else
      contact_id = exist_contact.ref
      flag = true
    end

    if contact_id
      status, data = ApplicationController.helpers.dolibarr_contact(contact_id)
      flag = ApplicationController.helpers.new_contact(data) if status == 200
    end

    return flag, contact_id
  end

  def create_contact_user(contact_id, user)
    flag = false
    contact = Contact.find_by(ref: contact_id)
    login = "#{contact.firstname}_#{contact.ref}"

    params = {limit: 1, sqlfilters: "t.login='#{login}'"}
    status, data = ApplicationController.helpers.dolibarr_users(params)

    if status == 404
      params = {"login": login, "password": SecureRandom.urlsafe_base64(8)}
      method = "/contacts/#{contact_id}/createUser"
      status, data = ApplicationController.helpers.dolibarr_api_post(method, params, user)

      flag = true if status == 200
    end

    return flag
  end

  # status, data = ApplicationController.helpers.set_contact_user_group(66, 7)
  def set_contact_user_group(user_ref, group_id)
    method = "/users/#{user_ref}/setGroup/#{group_id}"
    params = {id: user_ref, group: group_id}
    status, data = ApplicationController.helpers.dolibarr_api_get(method, params)

    return status, data
  end

end
