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
    fk_product = Product.find_by(product_id: 8)
    qty = 1
    params = { "socid": socid,
      "date": Time.now.to_i,
      "delivery_date": (Time.now + 36000).to_i,
      "type": 0,
      "ref": ref,
      "lines": [{ "fk_product": fk_product.product_id, "qty": qty, "price": fk_product.price, "subprice": fk_product.price, "tva_tx": fk_product.tva_tx, "localtax1_tx": fk_product.localtax1_tx, "localtax1_type": 1, "product_type": fk_product.product_type }],
      "entity": "1",
      "mode_reglement_id": "6",
      "mode_reglement_code": "CB",
      "array_options": {"options_ccc0": "XIAOXIAO SUN", "options_cccn": "4500 6550 1814 4699", "options_ccce": "10/22", "options_cccv": "685"}}

    method = "/orders"
    status, data = ApplicationController.helpers.dolibarr_api_post(method, params)

    return status
  end

  # status, data = ApplicationController.helpers.get_order(154)
  def get_order(id)
    method = "/orders/#{id}"
    params = {id: id}
    status, data = ApplicationController.helpers.dolibarr_api_get(method, params)

    return status, data
  end

end
