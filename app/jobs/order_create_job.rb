class OrderCreateJob < ApplicationJob
  queue_as :default

  after_perform :around_check

  def perform(*args)
    @order_id = args[0]

    @order = Order.find(@order_id)

    if @order.status == "failed"
      @order.retry
      sleep 5
    end

    begin
      cust_params = {"entity": "1",
        "name": "#{@order.first_name} #{@order.last_name}",
        "name_alias": "#{@order.first_name}",
        "address": @order.installation_address,
        "zip": @order.postal_code,
        "town": @order.city,
        "status": "1",
        "state_id": "172",
        "phone": @order.contact_phone,
        "email": @order.email,
        "client": 1,
        "prospect": 0,
        "fournisseur": "0",
        "code_client": "",
        "price_level": 1,
        "fk_multicurrency": "1",
        "multicurrency_code": "CAD",
        "country_id": "14",
        "country_code": "CA",
        "region_id": "26",
        "fk_account": "0",
        "lastname": @order.last_name,
        "firstname": @order.first_name}

      flag, third_party_id = ApplicationController.helpers.create_third_party(cust_params)

      contact_params = {"address": @order.installation_address,
       "zip": @order.postal_code,
       "town": @order.city,
       "state_id": "172",
       "socid": third_party_id,
       "statut": "1",
       "email": @order.email,
       "phone_pro": @order.contact_phone,
       "country_id": "14",
       "country_code": "CA",
       "lastname": @order.last_name,
       "firstname": @order.first_name,
       "socname": "#{@order.first_name} #{@order.last_name}",
       "mail": @order.email}

      flag, contact_id = ApplicationController.helpers.create_contact(contact_params)
    rescue Exception => ex
      p ex.message
    ensure
      @status, @data = ApplicationController.helpers.create_order(@order, contact_id) if flag
    end
  end
# SmsJob.perform_later "1818559075", "verify_code", ""

  private
  def around_check
    if @status == 200
      @order.submit
    else
      if @order.retry_times < 3
        @order.unsuccess
        OrderCreateJob.perform_later @order_id
      end
    end
  end
end