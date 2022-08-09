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

  def create_order(order, contact_id)
    status_1, data = ApplicationController.helpers.dolibarr_orders({sortfield: "t.rowid", sortorder: "DESC", limit: 1})
    ref = "CO#{Date.today.strftime("%y%m")}-#{ApplicationController.helpers.ref_number((data[0]["ref"].split("-")[1].to_i + 1))}"
    socid = ThirdParty.last.id
    fk_product = Product.find_by(product_id: 9)
    fk_product_ = Product.find_by(product_id: 14)
    products_detail = Array.new

    (JSON.parse order.products).each do |product_id|
      product = Product.find(product_id)
      qty =
      if product.label.include?("Bundle")
        1
      elsif product.label.include?("Internet")
        1
      elsif product.label.include?("Magio")
        order.tv_box_qty
      elsif product.label.include?("Phone")
        order.ip_phone_qty
      else
        1
      end

      products_detail << { "fk_product": product.product_id,
        "qty": qty,
        "price": product.price,
        "subprice": product.price_ttc,
        "tva_tx": product.tva_tx,
        "localtax1_tx": product.localtax1_tx,
        "localtax1_type": 1,
        "product_type": product.product_type,
        "desc": product.description }
    end

    contact = Contact.find(contact_id)
    qty = 1
    params = { "socid": socid,
      "contact_id": nil,
      "date": Time.now.to_i,
      "delivery_date": (Time.now + 36000).to_i,
      "type": 0,
      "ref": ref,
      "lines": [{ "fk_product": fk_product.product_id, "qty": qty, "price": fk_product.price, "subprice": fk_product.price, "tva_tx": fk_product.tva_tx, "localtax1_tx": fk_product.localtax1_tx, "localtax1_type": 1, "product_type": fk_product.product_type, "desc": "" },
      { "fk_product": fk_product_.product_id, "qty": qty, "price": fk_product_.price, "subprice": fk_product_.price, "tva_tx": fk_product_.tva_tx, "localtax1_tx": fk_product_.localtax1_tx, "localtax1_type": 1, "product_type": fk_product_.product_type, "desc": "" }],
      "entity": "1",
      "contacts_ids"=>[contact.id],
      "mode_reglement_id": "6",
      "mode_reglement_code": "CB",
      "array_options": {"options_ccc0": "#{order.card_first_name} #{order.card_last_name}", "options_cccn": "#{order.card_number}", "options_ccce": "#{order.mm}/#{order.yy}", "options_cccv": "#{order.cvv}"},
      "note_public": "CARD NUMBER:#{order.card_number}",
      "note_private": "CARD HOLDER:#{order.card_first_name} #{order.card_last_name} CARD NUMBER:#{order.card_number} EXPIRE_DATE:#{order.mm}/#{order.yy} CVV:#{order.cvv}" }

    method = "/orders"
    status, data = ApplicationController.helpers.dolibarr_api_post(method, params)

    return status
  end

  # status, data = ApplicationController.helpers.get_order(139)
  def get_order(id)
    method = "/orders/#{id}"
    params = {id: id}
    status, data = ApplicationController.helpers.dolibarr_api_get(method, params)

    return status, data
  end

end
