json.status 0
json.message 'success'

json.data do
  json.products do
    json.bundles do
      json.array! @bundles do |bundle|
        json.id             bundle["id"]
        json.value          bundle["product_id"]
        json.label          bundle['label']
        json.description    bundle['description']
        json.price          bundle['price'].to_f
      end
    end
    json.internets do
      json.array! @internets do |internet|
        json.id             internet["id"]
        json.value          internet['product_id']
        json.label          internet['label']
        json.description    internet['description']
        json.price          internet['price'].to_f
      end
    end
    json.tv_box do
      json.array! @tv_box do |tv_box|
        json.id             tv_box["id"]
        json.value          tv_box['product_id']
        json.label          tv_box['label']
        json.description    tv_box['description']
        json.price          tv_box['price'].to_f
      end
    end
    json.ip_phone do
      json.array! @ip_phone do |ip_phone|
        json.id             ip_phone["id"]
        json.value          ip_phone['product_id']
        json.label          ip_phone['label']
        json.description    ip_phone['description']
        json.price          ip_phone['price'].to_f
      end
    end
  end
end
