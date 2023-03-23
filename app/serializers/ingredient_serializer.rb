class IngredientSerializer < ActiveModel::Serializer
  attributes :quantity

  belongs_to :menu_item
  belongs_to :product

end
