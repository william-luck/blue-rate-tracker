class Ingredient < ApplicationRecord

    belongs_to :menu_item
    belongs_to :product

end
