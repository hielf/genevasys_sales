module ProductsHelper

  def new_product(params)
    flag = true
    product_id = params["id"]
    label = params["label"]
    description = params["description"]
    product_type = params["type"]
    price = params["price"]
    price_ttc = params["price_ttc"]
    tva_tx = params["tva_tx"]
    localtax1_tx = params["localtax1_tx"]
    status = params["status"]
    ref = params["ref"]

    if Product.find_by(product_id: product_id).nil?
      begin
        product = Product.new(product_id: product_id,
                          label: label,
                          description: description,
                          product_type: product_type,
                          price: price,
                          price_ttc: price_ttc,
                          tva_tx: tva_tx,
                          localtax1_tx: localtax1_tx,
                          status: status,
                          ref: ref)
        product.save
      rescue Exception => e
        flag = false
        Rails.logger.warn "new_product error: #{e.message}"
      end
    else
      product = Product.find_by(product_id: product_id)
      begin
        product.update(product_id: product_id,
                       label: label,
                       description: description,
                       product_type: product_type,
                       price: price,
                       price_ttc: price_ttc,
                       tva_tx: tva_tx,
                       localtax1_tx: localtax1_tx,
                       status: status,
                       ref: ref)
      rescue Exception => e
        flag = false
        Rails.logger.warn "update_product error: #{e.message}"
      end
    end

    return flag
  end

  # ApplicationController.helpers.init_products
  def init_products
    count = 0
    status, data = ApplicationController.helpers.dolibarr_products
    data.each do |params|
      flag = ApplicationController.helpers.new_product(params)
      break if flag == false
      count = count + 1
    end;0

    p count
  end

  def product_tags(product)
    # A101110
    ref = product.ref
    tag = Set.new
    ref.chars.each_with_index do |char, index|
      case ref[0]
      when "A"
        case index
        when 1
          sub_ref = "B" + char.rjust((ref.length - 1), "0")
          p_b = Product.find_by(ref: sub_ref)
          if p_b
            description = ActionView::Base.full_sanitizer.sanitize(p_b.description).upcase
            description.split("/").each do |d|
              if d.scan(/\d/).join('').to_i > 0
                p "B#{d.scan(/\d/).join('')}"
                tag << "B#{d.scan(/\d/).join('')}"
              end
            end
          end
        when 2
          sub_ref = "C" + char.rjust((ref.length - 1), "0")
          p_c = Product.find_by(ref: sub_ref)
          tag << "C" if p_c
        when 3
          sub_ref = "D" + char.rjust((ref.length - 1), "0")
          p_d = Product.find_by(ref: sub_ref)
          tag << "D" if p_d
        when 4
          sub_ref = "E" + char.rjust((ref.length - 1), "0")
          p_e = Product.find_by(ref: sub_ref)
          tag << "E" if p_e
        when 5
          sub_ref = "F" + char.rjust((ref.length - 1), "0")
          p_f = Product.find_by(ref: sub_ref)
          tag << "F" if p_f
        end
      when "B"
        p_b = Product.find_by(ref: ref)
        if p_b
          description = ActionView::Base.full_sanitizer.sanitize(p_b.description).upcase
          description.split("/").each do |d|
            if d.scan(/\d/).join('').to_i > 0
              p "B#{d.scan(/\d/).join('')}"
              tag << "B#{d.scan(/\d/).join('')}"
            end
          end
        end
      when "C"
        tag << "C"
      when "D"
        tag << "D"
      when "E"
        tag << "E"
      when "F"
        tag << "F"
      end

    end

    return tag.sort
  end

end
