class ProductSerializer < ActiveModel::Serializer
  attributes :name, :price

  # has_many :ingredients

end
