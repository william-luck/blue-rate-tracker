class AddPriceRatioToMenuItems < ActiveRecord::Migration[6.1]
  def change
    add_column :menu_items, :price_ratio, :float
  end
end
