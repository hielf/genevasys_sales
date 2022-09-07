class Api::ProductsController < Api::ApplicationController
  skip_before_action :authenticate_user!, only: [:index]

  def index
    products = Product.where(visible: 1, product_type: 1, status: 1)

    @bundles = Array.new
    products.where("label LIKE ?", '%Bundle%').each do |product|
      hash = product.as_json
      description = ApplicationController.helpers.string_between_markers(ActionView::Base.full_sanitizer.sanitize(hash["description"]), "(", ")").upcase
      tag = Set.new
      description.split("/").each do |d|
        if d.scan(/\d/).join('').to_i > 0
          p "B#{d.scan(/\d/).join('')}"
          tag << "B#{d.scan(/\d/).join('')}"
        end
        if d.include?("TV")
          tag << "C"
        end
        if d.include?("PHONE")
          tag << "D"
        end
      end
      hash["tag"] = tag.sort
      @bundles << hash
    end
    @bundles = @bundles.sort_by { |k| k["level"] }.reverse!

    @internets = Array.new
    products.where("label LIKE ?", '%Internet%').each do |product|
      hash = product.as_json
      description = ActionView::Base.full_sanitizer.sanitize(hash["description"]).upcase
      tag = Set.new
      description.split("/").each do |d|
        if d.scan(/\d/).join('').to_i > 0
          p "B#{d.scan(/\d/).join('')}"
          tag << "B#{d.scan(/\d/).join('')}"
        end
        if d.include?("TV")
          tag << "C"
        end
        if d.include?("PHONE")
          tag << "D"
        end
      end
      hash["tag"] = tag.sort
      @internets << hash
    end
    @internets = @internets.sort_by { |k| k["level"] }.reverse!

    @tv_box = Array.new
    products.where("label LIKE ?", '%TV Box%').each do |product|
      hash = product.as_json
      description = ActionView::Base.full_sanitizer.sanitize(hash["description"]).upcase
      tag = Set.new
      description.split("/").each do |d|
        if d.scan(/\d/).join('').to_i > 0
          p "B#{d.scan(/\d/).join('')}"
          tag << "B#{d.scan(/\d/).join('')}"
        end
        if d.include?("TV")
          tag << "C"
        end
        if d.include?("PHONE")
          tag << "D"
        end
      end
      hash["tag"] = tag.sort
      @tv_box << hash
    end

    @ip_phone = Array.new
    products.where("label LIKE ?", '%IP Phone%').each do |product|
      hash = product.as_json
      description = ActionView::Base.full_sanitizer.sanitize(hash["description"]).upcase
      tag = Set.new
      description.split("/").each do |d|
        if d.scan(/\d/).join('').to_i > 0
          p "B#{d.scan(/\d/).join('')}"
          tag << "B#{d.scan(/\d/).join('')}"
        end
        if d.include?("TV")
          tag << "C"
        end
        if d.include?("PHONE")
          tag << "D"
        end
      end
      hash["tag"] = tag.sort
      @ip_phone << hash
    end
  end

end
