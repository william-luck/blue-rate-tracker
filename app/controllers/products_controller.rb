class ProductsController < ApplicationController

    def index 
        products = Product.all.order('name ASC')
        render json: products
    end
    
end
