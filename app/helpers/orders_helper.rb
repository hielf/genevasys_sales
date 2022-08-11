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
    products_detail = Array.new

    (JSON.parse order.products).each do |product_id|
      product = Product.find_by(product_id: product_id)
      qty, desc =
      if product.label.include?("Bundle")
        [1, product.description]
      elsif product.label.include?("Internet")
        [1, product.description]
      elsif product.label.include?("Magio")
        [order.tv_box_qty, "Qty: #{order.tv_box_qty}"]
      elsif product.label.include?("Phone")
        [order.ip_phone_qty, "Qty: #{order.ip_phone_qty}" + (order.ip_phone_port_in == 2 ? "<br />Port in: #{order.ip_phone_port_in_number}" : "")  + (order.ip_phone_address_option == 2 ? "<br />Address: #{order.ip_phone_address}" : "")]
      else
        [1, ""]
      end

      products_detail << { "fk_product": product.product_id,
        "qty": qty,
        "price": product.price,
        "subprice": product.price_ttc,
        "tva_tx": product.tva_tx,
        "localtax1_tx": product.localtax1_tx,
        "localtax1_type": 1,
        "product_type": product.product_type,
        "desc": desc }
    end

    contact = Contact.find(contact_id)
    qty = 1
    d = order.date_request
    t = case order.installation_time
    when 1
      8
    when 2
      14
    end
    delivery_date = DateTime.new(d.year, d.month, d.day, t, 0, 0, Time.zone.now.zone).to_i
    params = { "socid": socid,
      "contact_id": contact.ref,
      "date": Time.now.to_i,
      "delivery_date": delivery_date,
      "type": 0,
      "ref": ref,
      "lines": products_detail,
      "entity": "1",
      "contacts_ids"=>[contact.ref],
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
