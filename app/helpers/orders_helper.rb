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

  def order_ref_generate
    current_max = 0
    status, data = ApplicationController.helpers.dolibarr_orders({sortfield: "t.rowid", sortorder: "DESC", limit: 5})
    if status == 200 && data.count > 0
      a = data.map{|o| o["ref"]}
      current_max = a.map{|s| s.split('-')[-1].to_i}.max
    end

    ref = "CO#{Date.today.strftime("%y%m")}-#{ApplicationController.helpers.ref_number((current_max + 1))}"

    return ref
  end

  def create_order(order, contact_id)
    ref = ApplicationController.helpers.order_ref_generate
    contact = Contact.find_by(ref: contact_id)
    socid = contact.third_party.ref
    products_detail = Array.new
    user = order.user

    (JSON.parse order.products).each do |product_id|
      product = Product.find_by(product_id: product_id)
      qty, desc =
      if product.label.include?("Bundle")
        [1, "#{product.description}" + "<br />" + (order.ip_phone_port_in == 2 ? "<br />Port in: #{order.ip_phone_port_in_number}" : "") + (order.ip_phone_port_in == 3 ? "<br />Call Forward: #{order.ip_phone_port_in_number}" : "")  + "<br />E911 Address: #{order.ip_phone_address}"]
      elsif product.label.include?("Internet")
        [1, product.description]
      elsif product.label.include?("TV")
        [order.tv_box_qty, "Qty: #{order.tv_box_qty}"]
      elsif product.label.include?("Phone")
        [order.ip_phone_qty, (order.ip_phone_port_in == 2 ? "<br />Port in: #{order.ip_phone_port_in_number}" : "")  + "<br />E911 Address: #{order.ip_phone_address}"]
      else
        [1, ""]
      end

      products_detail << { "fk_product": product.product_id,
        "qty": qty,
        "price": product.price_ttc.to_f,
        "subprice": product.price.to_f,
        "tva_tx": product.tva_tx.to_f,
        "localtax1_tx": product.localtax1_tx.to_f,
        "localtax1_type": 1,
        "product_type": product.product_type,
        "desc": desc }
    end

    contact = Contact.find(contact_id)
    d = order.date_request
    t = case order.installation_time
    when 1
      9
    when 2
      14
    end
    delivery_date = DateTime.new(d.year, d.month, d.day, t, 0, 0, Time.zone.now.zone).to_i
    unit_type = case order.options_unit_type
    when 1
      "Main"
    when 2
      "Basement"
    when 3
      "Unit"
    end
    card_type = case order.options_card_type
    when 1
      "VISA"
    when 2
      "MasterCard"
    when 3
      "UnionPay"
    end
    note_private = "CARD TYPE: #{card_type} <br /> CARD HOLDER: #{order.card_first_name} #{order.card_last_name} <br /> CARD NUMBER: #{order.card_number} <br /> EXPIRE DATE: #{order.mm}/#{order.yy} <br /> CVV: #{order.cvv} <br /> CARD ADDRESS: #{order.card_registration_ddress} " +
    "<br /> UNIT TYPE: #{unit_type}" +
    (order.buzz != "" ? "<br />  BUZZ: #{order.buzz}" : "") +
    (order.alt_phone != "" ? "<br />  ALT PHONE: #{order.alt_phone}" : "") +
    (order.additional_requirements != "" ? "<br />  NOTE: #{order.additional_requirements}" : "")

    params = { "socid": socid,
      # "contact_id": contact.ref,
      "date": Time.now.to_i,
      "delivery_date": delivery_date,
      "type": 0,
      "ref": ref,
      "lines": products_detail,
      "entity": "1",
      "mode_reglement_id": "6",
      "mode_reglement_code": "CB",
      "array_options": {"options_ccc0": "#{order.card_first_name} #{order.card_last_name}", "options_cccn": "#{order.card_number}", "options_ccce": "#{order.mm}/#{order.yy}", "options_cccv": "#{order.cvv}"},
      "note_public": "CARD NUMBER:#{order.card_number[0..3] + order.card_number[4..-1].gsub(/.(?=.{4})/,'*')}",
      "note_private": note_private }

    # p params
    method = "/orders"
    status, order_id = ApplicationController.helpers.dolibarr_api_post(method, params, user)
    status, data = ApplicationController.helpers.add_order_contact(order_id, contact.ref, user) if status == 200

    return status, order_id
  end

  def add_order_contact(order_id, contact_ref, user)
    method = "/orders/#{order_id}/contact/#{contact_ref}/BILLING"
    params = {}
    status, data = ApplicationController.helpers.dolibarr_api_post(method, params, user)
  end

  # status, data = ApplicationController.helpers.get_order(197)
  def get_order(order_id)
    method = "/orders/#{order_id}"
    params = {id: order_id}
    status, data = ApplicationController.helpers.dolibarr_api_get(method, params)

    return status, data
  end

  # flag, pdf_file = ApplicationController.helpers.order_document_generate(186)
  def order_document_generate(order_id, user)
    flag = false
    status, data = ApplicationController.helpers.get_order(order_id)
    ref = data["ref"]
    pdf_file = "#{ref}.pdf"
    method = "/documents/builddoc"
    params = { "modulepart": "order", "original_file": "#{ref}/#{ref}.pdf", "doctemplate": "eratosthene", "langcode": "en_US" }

    status, data = ApplicationController.helpers.dolibarr_api_put(method, params, user) if status == 200

    if status == 200
      c = data["content"]
      File.open("#{Rails.root.to_s}/tmp/data/#{pdf_file}", "wb") do |f|
        f.write(Base64.decode64(c))
      end

      flag = true
    end

    return flag, pdf_file
  end

end
