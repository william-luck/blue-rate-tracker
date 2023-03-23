class Product < ApplicationRecord

    has_many :ingredients
    has_many :menu_items, through: :ingredients

end
