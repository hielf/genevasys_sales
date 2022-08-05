module ContactsHelper

  def new_contact(params)
    flag = true
    ref = params["ref"]
    socid = params["socid"]
    third_party = ThirdParty.find_by(ref: socid)

    if Contact.find_by(ref: ref).nil?
      begin
        contact = third_party.contacts.new(params.select{|x| Contact.attribute_names.index(x)})
        contact.save
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
    flag = false
    exist_contact = Contact.find_by(phone_pro: params[:phone_pro], firstname: params[:firstname])

    method = "/contacts"
    status, data = ApplicationController.helpers.dolibarr_api_post(method, params)
    id = data if status == 200

    if id
      status, data = ApplicationController.helpers.dolibarr_contact(id)
      flag = ApplicationController.helpers.new_contact(data)
    end

    return flag
  end

end
