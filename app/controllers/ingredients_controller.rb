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

end
