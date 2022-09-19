class Api::ProductsController < Api::ApplicationController
  skip_before_action :authenticate_user!, only: [:index]

  def index
    products = Product.where(visible: 1, product_type: 1, status: 1)

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
  end

end
