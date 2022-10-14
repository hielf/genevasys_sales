json.status 0
json.message 'success'

json.data do
  json.bundles do
    json.array! @bundles do |bundle|
      json.id             bundle["id"]
      json.value          bundle["product_id"]
      json.label          bundle['label'].gsub(bundle['bundle_tag'], "").strip
      json.description    ActionView::Base.full_sanitizer.sanitize(bundle['description'])
      json.price          bundle['price'].to_f
      json.tag            bundle['tag']
      json.bundle_tag     bundle['bundle_tag']
    end
  end
  json.internets do
    json.array! @internets do |internet|
      json.id             internet["id"]
      json.value          internet['product_id']
      json.label          internet['label']
      json.description    ActionView::Base.full_sanitizer.sanitize(internet['description'])
      json.price          internet['price'].to_f
      json.tag            internet['tag']
    end
  end
  json.tv_box do
    json.array! @tv_box do |tv_box|
      json.id             tv_box["id"]
      json.value          tv_box['product_id']
      json.label          tv_box['label']
      json.description    ActionView::Base.full_sanitizer.sanitize(tv_box['description'])
      json.price          tv_box['price'].to_f
      json.tag            tv_box['tag']
    end
  end
  json.ip_phone do
    json.array! @ip_phone do |ip_phone|
      json.id             ip_phone["id"]
      json.value          ip_phone['product_id']
      json.label          ip_phone['label']
      json.description    ActionView::Base.full_sanitizer.sanitize(ip_phone['description'])
      json.price          ip_phone['price'].to_f
      json.tag            ip_phone['tag']
    end
  end
  json.fee do
    json.array! @fee do |fee|
      json.id             fee["id"]
      json.value          fee['product_id']
      json.label          fee['label']
      json.description    ActionView::Base.full_sanitizer.sanitize(fee['description'])
      json.price          fee['price'].to_f
      json.tag            fee['tag']
    end
  end
  json.rebate do
    json.array! @rebate do |rebate|
      json.id             rebate["id"]
      json.value          rebate['product_id']
      json.label          rebate['label']
      json.description    ActionView::Base.full_sanitizer.sanitize(rebate['description'])
      json.price          rebate['price'].to_f
      json.tag            rebate['tag']
    end
  end
end
