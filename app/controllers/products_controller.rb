class ProductsController < ApplicationController

    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_data_error

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
            render json: ['You must be logged into to edit products']
        end
    end

    private

    def product_params
        params.permit(:name, :price)
    end

    def render_invalid_data_error(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    
end
