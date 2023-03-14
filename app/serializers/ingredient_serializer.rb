class IngredientSerializer < ActiveModel::Serializer
  attributes :id, :product_id, :menu_id, :quantity
end
