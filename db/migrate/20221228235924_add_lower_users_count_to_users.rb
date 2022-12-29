class AddLowerUsersCountToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :lower_users_count, :integer, default: 0
  end
end
