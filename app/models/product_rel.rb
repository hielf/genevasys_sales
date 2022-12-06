class ProductRel < ApplicationRecord
  belongs_to :upper_product, :class_name => 'Product', :foreign_key => :upper_product_id, :primary_key => :product_id
  belongs_to :lower_product, :class_name => 'Product', :foreign_key => :lower_product_id, :primary_key => :product_id

end
