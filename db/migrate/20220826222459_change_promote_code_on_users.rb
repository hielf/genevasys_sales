class ChangePromoteCodeOnUsers < ActiveRecord::Migration[6.1]
  def change
    change_column :users, :promote_code, :string, :limit => 250
  end
end
