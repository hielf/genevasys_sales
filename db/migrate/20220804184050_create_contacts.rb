class CreateContacts < ActiveRecord::Migration[6.1]
  def change
    create_table :contacts do |t|
      t.integer :third_party_id
      t.string :address
      t.string :zip
      t.string :town
      t.string :state_id
      t.string :socid
      t.string :email
      t.string :statut
      t.string :phone_pro
      t.string :ref
      t.string :country_id
      t.string :country_code
      t.string :lastname
      t.string :firstname
      t.string :socname
      t.string :mail

      t.timestamps
    end
    add_index :contacts, :third_party_id
  end
end
