class CreateProductRels < ActiveRecord::Migration[6.1]
  def change
    create_table :product_rels do |t|
      t.string :upper_product_id
      t.string :lower_product_id
      t.date :start_date
      t.date :end_date

      t.timestamps
    end
    add_index :product_rels, :upper_product_id
    add_index :product_rels, [:upper_product_id, :lower_product_id], unique: true
  end
end
