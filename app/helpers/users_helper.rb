module UsersHelper

  def new_user(params)
    flag = true
    mobile =    params["user_mobile"]
    ref =       params["ref"]
    statut =    params["statut"]
    employee =  params["employee"]
    email =     params["email"]
    user_name = params["login"]
    lastname =  params["lastname"]
    firstname = params["firstname"]

    if User.find_by(ref: ref).nil?
      begin
        user = User.new(mobile: mobile,
                        ref: ref,
                        statut: statut,
                        employee: employee,
                        email: email,
                        user_name: user_name,
                        lastname: lastname,
                        firstname: firstname)
        user.save
      rescue Exception => e
        flag = false
        Rails.logger.warn "new_user error: #{e.message}"
      end
    else
      user = User.find_by(ref: ref).nil?
      begin
        user.update(mobile: mobile,
                    ref: ref,
                    statut: statut,
                    employee: employee,
                    email: email,
                    user_name: user_name,
                    lastname: lastname,
                    firstname: firstname)
      rescue Exception => e
        flag = false
        Rails.logger.warn "update_user error: #{e.message}"
      end
    end

    return flag
  end

  # ApplicationController.helpers.init_users
  def init_users
    count = 0
    params = {limit: 0}
    status, data = ApplicationController.helpers.dolibarr_users(params)
    data.each do |params|
      flag = ApplicationController.helpers.new_user(params)
      break if flag == false
      count = count + 1
    end;0

    p count
  end

end
