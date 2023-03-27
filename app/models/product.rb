class Product < ApplicationRecord

    validates :name, :price, presence: true
    validates :price, numericality: { only_integer: true }


    has_many :ingredients
    has_many :menu_items, through: :ingredients

end
