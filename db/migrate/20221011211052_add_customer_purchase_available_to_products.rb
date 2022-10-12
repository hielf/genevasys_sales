class AddCustomerPurchaseAvailableToProducts < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :customer_purchase_available, :boolean, default: false
  end
end
