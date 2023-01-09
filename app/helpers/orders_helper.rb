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
      if product.ref[0] == "A"
        [1, "#{product.description}" + "<br />" + (order.ip_phone_port_in == 2 ? "<br />Port in: #{order.ip_phone_port_in_number}" : "") + (order.ip_phone_port_in == 3 ? "<br />Call Forward: #{order.ip_phone_port_in_number}" : "")  + "<br />E911 Address: #{order.ip_phone_address}"]
      elsif product.ref[0] == "B"
        [1, product.description]
      elsif product.ref[0] == "C"
        [order.tv_box_qty, "Qty: #{order.tv_box_qty}"]
      elsif product.ref[0] == "D"
        [order.ip_phone_qty, (order.ip_phone_port_in == 2 ? "<br />Port in: #{order.ip_phone_port_in_number}" : "")  + "<br />E911 Address: #{order.ip_phone_address}"]
      elsif product.ref[0] == "F"
        [1, "From #{Date.today.beginning_of_month.strftime('%m/%Y')} to #{(Date.today + 11.months).beginning_of_month.strftime('%m/%Y')}"]
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

    # contact = Contact.find(contact_id)
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
      "array_options": {"options_ccc0": "#{order.card_first_name} #{order.card_last_name}", "options_cccn": "#{order.card_number}", "options_ccce": "#{order.mm}/#{order.yy.last(2)}", "options_cccv": "#{order.cvv}"},
      "note_public": "CARD NUMBER:#{order.card_number[0..3] + order.card_number[4..-1].gsub(/.(?=.{4})/,'*')}",
      "note_private": note_private }

    # p params
    method = "/orders"
    status, order_id = ApplicationController.helpers.dolibarr_api_post(method, params, user)

    order.update(order_id: order_id)

    user = ApplicationController.helpers.current_user([])
    status, data = ApplicationController.helpers.add_order_contact(order_id, contact.ref, user) if status == 200

    ApplicationController.helpers.set_order_contact_type(order_id, contact.ref, 'CUSTOMER') if status == 200

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

  def order_status_change(order)
    status, data = ApplicationController.helpers.get_order(order.order_id) if !order.order_id.nil?
    if status == 200
      order_status = data["status"].to_i
      case order_status
      when 1..5 then
        order.validation
      when -1 then
        order.cancel
      end
    end

    return order.status, order.promote_code
  end

  def order_sync
    orders = Order.where(status: "submitted", created_at: 15.days.ago..Time.now)

    orders.each do |order|
      order_status, promote_code = ApplicationController.helpers.order_status_change(order)
      upper_user = User.find_by(promote_code: promote_code)

      if order_status == "validated"
        # upper user invoice add
        upper_user.add_lower_user
      end

      if order_status == "canceled"
        upper_user.minus_lower_user
      end
    end
  end

  # user = ApplicationController.helpers.current_user([])
  # status, data = ApplicationController.helpers.invoice_add(463, user)
  def invoice_add(order_id, user)
    status = 400
    invoice_id = nil

    order = Order.find_by(order_id: order_id)
    order_user = order.user
    user_third_party = ThirdParty.find_by(email: order_user.email)

    if user_third_party
      method = "/invoices"
      params = {socid: user_third_party.ref, note_public: "Reward for New Customer ORDER-REF:#{order.pdf_file.gsub(".pdf", "")}", note_private: "New User: #{order.first_name} #{order.contact_phone}"}
      status, invoice_id = ApplicationController.helpers.dolibarr_api_post(method, params, user)

      if status == 200
        reward_price = ENV["REWARD_PRICE"]
        method = "/invoices/#{invoice_id}/lines"
        params = {
          desc: "Reward for New Customer ORDER-REF:#{order.pdf_file.gsub(".pdf", "")}",
          rang: "-1",
          pa_ht: "0",
          marque_tx: "100",
          situation_percent: "100",
          multicurrency_subprice: reward_price,
          multicurrency_total_ht: reward_price,
          multicurrency_total_tva: "0",
          multicurrency_total_ttc: reward_price,
          product_type: "0",
          qty: "1",
          subprice: reward_price,
          vat_src_code: "N",
          total_ht: reward_price,
          total_tva: "0",
          total_localtax1: "0",
          total_localtax2: "0",
          total_ttc: reward_price,
          info_bits: "2",
          description: "Reward for New Customer ORDER-REF:#{order.pdf_file.gsub(".pdf", "")}",
          price: reward_price,
        }
        status, data = ApplicationController.helpers.dolibarr_api_post(method, params, user)
      end
    end

    return status, invoice_id
  end

end
