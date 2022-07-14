module ThirdPartiesHelper

  def new_order(params)
    flag = true
    ref = params["ref"]

    if Order.find_by(ref: ref).nil?
      begin
        order = Order.new(params)
        order.save
      rescue Exception => e
        flag = false
        Rails.logger.warn "new_order error: #{e.message}"
      end

    return flag
  end

  def create_order(params)
    socid = params["id"]
    params = { "socid": socid, "date": Time.now.to_i, "type": 0, "lines": [{ "fk_product": 2, "qty": 1 }] }

    method = "/orders"
    status, data = ApplicationController.helpers.dolibarr_api_post(method, params)

  end

end
