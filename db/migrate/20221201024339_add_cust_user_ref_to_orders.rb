class AddCustUserRefToOrders < ActiveRecord::Migration[6.1]
  def change
    add_column :orders, :cust_user_ref, :string
  end
end
