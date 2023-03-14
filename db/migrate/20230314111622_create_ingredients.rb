class CreateIngredients < ActiveRecord::Migration[6.1]
  def change
    create_table :ingredients do |t|
      t.integer :product_id
      t.integer :menu_id
      t.integer :quantity

      t.timestamps
    end
  end
end
