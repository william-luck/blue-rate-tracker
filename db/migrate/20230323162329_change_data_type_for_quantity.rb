class ChangeDataTypeForQuantity < ActiveRecord::Migration[6.1]
  def change
    change_column(:ingredients, :quantity, :float)
  end
end
