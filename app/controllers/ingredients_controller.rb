class IngredientsController < ApplicationController

    def update

        ingredient = Ingredient.find(params[:id])

        if (params[:name] === 'egg')
            ingredient.update!(quantity: params[:quantity].to_f * 0.083333)
        else 
            ingredient.update!(quantity: params[:quantity].to_f / 1000)
        end

        render json: ingredient, status: :accepted
    end

    def create
        ingredient = Ingredient.create!(ingredient_params)
        render json: ingredient, status: :accepted
    end

    def destroy
        ingredient = Ingredient.find(params[:id])
        ingredient.destroy

        render json: ingredient, status: :accepted
    end

    private 

    def ingredient_params
        params.permit(:product_id, :menu_item_id, :quantity)
    end

end
