class AddRetryTimesToOrders < ActiveRecord::Migration[6.1]
  def change
    add_column :orders, :retry_times, :integer, :default => 0
  end
end
