class MenuSerializer < ActiveModel::Serializer
  attributes :name

  has_many :menu_items  
  has_many :ingredients

end
