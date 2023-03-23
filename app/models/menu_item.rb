class MenuItem < ApplicationRecord

    has_many :ingredients
    has_many :products, through: :ingredients

    belongs_to :menu
end
