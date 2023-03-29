class IngredientsController < ApplicationController

    def update

        ingredient = Ingredient.find(params[:id])
        ingredient.update!(quantity: params[:quantity].to_f / 1000)

        render json: ingredient, status: :accepted
    end

end
