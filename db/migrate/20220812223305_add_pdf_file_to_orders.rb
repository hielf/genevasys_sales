class AddPdfFileToOrders < ActiveRecord::Migration[6.1]
  def change
    add_column :orders, :pdf_file, :string
  end
end
