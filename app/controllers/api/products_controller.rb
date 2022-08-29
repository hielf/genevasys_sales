class Api::ProductsController < Api::ApplicationController
  skip_before_action :authenticate_user!, only: [:index]

  def index
    products = Product.where(visible: 1, product_type: 1, status: 1)

    @bundles = Array.new
    products.where("label LIKE ?", '%Bundle%').each do |product|
      @bundles << product.as_json
    end
    @bundles = @bundles.sort_by { |k| k["level"] }.reverse!

    @internets = Array.new
    products.where("label LIKE ?", '%Internet%').each do |product|
      @internets << product.as_json
    end
    @internets = @internets.sort_by { |k| k["level"] }.reverse!

    @tv_box = Array.new
    products.where("label LIKE ?", '%TV Box%').each do |product|
      @tv_box << product.as_json
    end

    @ip_phone = Array.new
    products.where("label LIKE ?", '%IP Phone%').each do |product|
      @ip_phone << product.as_json
    end
  end

end
