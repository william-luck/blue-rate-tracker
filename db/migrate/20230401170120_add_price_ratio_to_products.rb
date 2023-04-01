class AddPriceRatioToProducts < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :price_ratio, :float
  end
end
