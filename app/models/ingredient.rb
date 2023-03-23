class Ingredient < ApplicationRecord

    belongs_to :menu_item
    belongs_to :product

    def find_price_per_quantity
        product = self.product
        calculated_price = self.quantity * product.price 
        calculated_price
    end

end
