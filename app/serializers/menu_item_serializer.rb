class MenuItemSerializer < ActiveModel::Serializer
  attributes :name, :id

  belongs_to :menu
  has_many :ingredients, serializer: MenuItemIngredientSerializer


end
