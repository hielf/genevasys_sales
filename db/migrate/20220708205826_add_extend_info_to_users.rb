class AddExtendInfoToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :ref, :string
    add_column :users, :statut, :string
    add_column :users, :employee, :string
    add_column :users, :email, :string
    add_column :users, :user_name, :string
    add_column :users, :lastname, :string
    add_column :users, :firstname, :string
    rename_column :users, :promotional_code, :promote_code
  end
end
