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

    @status, @data = ApplicationController.helpers.create_order(@order)
  end
# SmsJob.perform_later "1818559075", "verify_code", ""

  private
  def around_check
    if @status == 200
      @order.submit
    else
      @order.failing
      OrderCreateJob.perform_later @order_id
    end
  end
end
