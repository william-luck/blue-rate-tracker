class Ingredient < ApplicationRecord

    belongs_to :menu
    belongs_to :product

end
