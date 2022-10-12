class Api::ProductsController < Api::ApplicationController
  skip_before_action :authenticate_user!, only: [:index]

  def index
    customer_purchase_available = params[:for_customer]
    p customer_purchase_available
    products = Product.where(visible: 1, product_type:1, status: 1).or(Product.where("ref LIKE ?", 'E%'))

    if !customer_purchase_available.nil? && ActiveRecord::Type::Boolean.new.cast(customer_purchase_available) == true
      products = products.where(customer_purchase_available: true)
    end

    @bundles = Array.new
    products.where("ref LIKE ?", 'A%').each do |product|
      hash = product.as_json
      tag = ApplicationController.helpers.product_tags(product)
      hash["tag"] = tag.sort
      @bundles << hash
    end
    @bundles = @bundles.sort_by { |k| k["level"] }.reverse!

    @internets = Array.new
    products.where("ref LIKE ?", 'B%').each do |product|
      hash = product.as_json
      tag = ApplicationController.helpers.product_tags(product)
      hash["tag"] = tag.sort
      @internets << hash
    end
    @internets = @internets.sort_by { |k| k["level"] }.reverse!

    @tv_box = Array.new
    products.where("ref LIKE ?", 'C%').each do |product|
      hash = product.as_json
      tag = ApplicationController.helpers.product_tags(product)
      hash["tag"] = tag.sort
      @tv_box << hash
    end

    @ip_phone = Array.new
    products.where("ref LIKE ?", 'D%').each do |product|
      hash = product.as_json
      tag = ApplicationController.helpers.product_tags(product)
      hash["tag"] = tag.sort
      @ip_phone << hash
    end

    @fee = Array.new
    products.where("ref LIKE ?", 'E%').each do |product|
      hash = product.as_json
      tag = ApplicationController.helpers.product_tags(product)
      hash["tag"] = tag.sort
      @fee << hash
    end

    @rebate = Array.new
    products.where("ref LIKE ?", 'F%').each do |product|
      hash = product.as_json
      tag = ApplicationController.helpers.product_tags(product)
      hash["tag"] = tag.sort
      @rebate << hash
    end

    products = Product.where(visible: 1, status: 1)
  end

end
