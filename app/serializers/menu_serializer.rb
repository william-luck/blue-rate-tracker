class MenuSerializer < ActiveModel::Serializer
  attributes :name, :id

  has_many :menu_items  
  # has_many :ingredients

end
