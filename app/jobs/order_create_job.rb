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
      "firstname": @order.first_name,
    }

    flag = ApplicationController.helpers.create_third_party(cust_params)
    @status, @data = ApplicationController.helpers.create_order(@order) if flag
  end
# SmsJob.perform_later "1818559075", "verify_code", ""

  private
  def around_check
    if @status == 200
      @order.submit
    else
      if @order.retry_times < 5
        @order.failing
        OrderCreateJob.perform_later @order_id
      end
    end
  end
end
