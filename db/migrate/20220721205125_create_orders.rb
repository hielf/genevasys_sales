class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.integer :user_id
      t.string :status
      t.string :products
      t.integer :tv_box_qty
      t.integer :ip_phone_qty
      t.integer :ip_phone_port_in
      t.string :ip_phone_port_in_number
      t.integer :ip_phone_address_option
      t.string :ip_phone_address
      t.integer :installation_time
      t.date :date_request
      t.string :first_name
      t.string :middle_name
      t.string :last_name
      t.string :contact_phone
      t.string :alt_phone
      t.string :email
      t.string :installation_address
      t.string :city
      t.string :province
      t.string :postal_code
      t.integer :options_unit_type
      t.string :buzz
      t.integer :options_same_address
      t.string :billing_address
      t.integer :options_card_type
      t.string :card_first_name
      t.string :card_last_name
      t.string :card_number
      t.string :mm
      t.string :yy
      t.string :cvv
      t.string :first_initial_payment
      t.string :recurrent_payment
      t.string :card_registration_ddress
      t.boolean :check_agreement
      t.string :promote_code
      t.string :additional_requirements

      t.timestamps
    end
    add_index :orders, :user_id
  end
end
