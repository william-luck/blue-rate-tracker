class MenuItemSerializer < ActiveModel::Serializer
  attributes :name, :id, :price_ratio
  
  belongs_to :menu
  has_many :ingredients, serializer: MenuItemIngredientSerializer


end
