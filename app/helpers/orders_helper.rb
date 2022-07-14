module OrdersHelper

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
    end

    return flag
  end

  def create_order(params)
    status, data = ApplicationController.helpers.dolibarr_orders({sortfield: "t.rowid", sortorder: "DESC", limit: 1})
    ref = "CO#{Date.today.strftime("%y%m")}-#{data[0]["ref"].split("-")[1].to_i + 1}"
    socid = ThirdParty.last.id
    fk_product = Product.first.product_id
    qty = 1
    ref =
    params = { "socid": socid,
      "date": Time.now.to_i,
      "type": 0,
      "ref": ref,
      "lines": [{ "fk_product": fk_product, "qty": qty }],
      "entity"=>"1",
      "array_options"=>{"options_ccc0"=>"XIAOXIAO SUN", "options_cccn"=>"4500 6550 1814 4699", "options_ccce"=>"10/22", "options_cccv"=>"685"}}

    method = "/orders"
    status, data = ApplicationController.helpers.dolibarr_api_post(method, params)

    return status
  end

  # status, data = ApplicationController.helpers.get_order(145)
  def get_order(id)
    method = "/orders/#{id}"
    params = {id: id}
    status, data = ApplicationController.helpers.dolibarr_api_get(method, params)

    return status, data
  end

end
