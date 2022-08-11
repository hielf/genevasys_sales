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

  def create_contact(params)
    p params
    flag = false
    contact_id = nil
    socid = params[:socid]
    third_party = ThirdParty.find_by(ref: socid)
    exist_contact = third_party.contacts.find_by(firstname: params[:firstname], email: params[:email])

    if exist_contact.nil?
      method = "/contacts"
      status, data = ApplicationController.helpers.dolibarr_api_post(method, params)
      contact_id = data if status == 200
    else
      flag = true
    end

    if contact_id
      status, data = ApplicationController.helpers.dolibarr_contact(contact_id)
      flag = ApplicationController.helpers.new_contact(data) if status == 200
    end

    return flag, contact_id
  end

end
