class Ingredient < ApplicationRecord

    validates :quantity, presence: true
    validates :quantity, numericality: true
    
    belongs_to :menu_item
    belongs_to :product

    def price_of_ingredient
        product = self.product
        calculated_price = self.quantity * product.price 
        calculated_price
    end

    def product_name
        Product.find(self.product_id).name
    end

end
