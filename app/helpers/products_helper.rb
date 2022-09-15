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

end
