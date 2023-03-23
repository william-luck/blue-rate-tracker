class ChangeIngredientToMenuItemId < ActiveRecord::Migration[6.1]
  def change
    rename_column :ingredients, :menu_id, :menu_item_id
  end
end
