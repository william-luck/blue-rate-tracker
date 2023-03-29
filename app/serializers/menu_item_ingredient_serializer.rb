class MenuItemIngredientSerializer < ActiveModel::Serializer
  attributes attributes :price_of_ingredient, :quantity, :product_name, :id

end
