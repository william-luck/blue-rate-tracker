class ProductSerializer < ActiveModel::Serializer
  attributes :price

  has_many :ingredients

end
