class Product < ApplicationRecord

    has_many :ingredients
    has_many :menus, through: :ingredients
    
end
