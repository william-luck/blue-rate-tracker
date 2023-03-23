class IngredientSerializer < ActiveModel::Serializer
  attributes :price_of_ingredient, :product_name

  belongs_to :menu_item
  belongs_to :product

end
