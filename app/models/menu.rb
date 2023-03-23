class Menu < ApplicationRecord

    has_many :ingredients
    has_many :products, through: :ingredients
    belongs_to :user
end
