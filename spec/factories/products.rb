FactoryBot.define do
  factory :product do
    product_id { "MyString" }
    label { "MyString" }
    description { "MyString" }
    type { "" }
    price { 1.5 }
    price_ttc { 1.5 }
    tva_tx { 1.5 }
    localtax1_tx { 1.5 }
    status { "MyString" }
    ref { "MyString" }
    visible { false }
  end
end
