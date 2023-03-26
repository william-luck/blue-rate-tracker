class MenuItemSerializer < ActiveModel::Serializer
  attributes :name

  belongs_to :menu
  has_many :ingredients, serializer: MenuItemIngredientSerializer


end
