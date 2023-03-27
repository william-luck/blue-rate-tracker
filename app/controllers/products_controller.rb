class ProductsController < ApplicationController

    def index 
        products = Product.all.order('name ASC')
        render json: products
    end

    def update
        product = Product.find(params[:id])
        if session[:user_id]
            product.update!(product_params)
            render json: product, status: :accepted
        else
            render json: ['Something went wrong']
        end
    end

    private

    def product_params
        params.permit(:name, :price)
    end

    
end
