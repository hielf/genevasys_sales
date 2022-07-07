class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :product_id
      t.string :label
      t.string :description
      t.string :product_type
      t.decimal :price, precision: 10, scale: 2
      t.decimal :price_ttc, precision: 10, scale: 2
      t.decimal :tva_tx, precision: 10, scale: 2
      t.decimal :localtax1_tx, precision: 10, scale: 2
      t.string :status
      t.string :ref
      t.boolean :visible, default: true

      t.timestamps
    end

    add_index :products, :product_id, unique: true
  end
end
