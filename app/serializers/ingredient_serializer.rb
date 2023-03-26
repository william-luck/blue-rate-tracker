class IngredientSerializer < ActiveModel::Serializer
  attributes :id, :product_id, :menu_item_id, :quantity

  belongs_to :menu_item
  belongs_to :product

end
