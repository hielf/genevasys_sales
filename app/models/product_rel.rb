class ProductRel < ApplicationRecord
  belongs_to :product, :foreign_key => :upper_product_id, :primary_key => :product_id
  has_many :products, :foreign_key => :product_id, :primary_key => :lower_product_id
end
