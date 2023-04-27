class IngredientsController < ApplicationController

    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_data_error

    def update

        ingredient = Ingredient.find(params[:id])

        if (params[:name] === 'egg')
            ingredient.update!(quantity: params[:quantity].to_f * 0.083333)
        else 
            if (params[:quantity].to_f / 1000) == 0
                render_text_error
            else
                ingredient.update!(quantity: params[:quantity].to_f / 1000)
                render json: ingredient, status: :accepted
            end
        end

        
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

    def render_invalid_data_error(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def render_text_error
        render json: {errors: 'Ingredient quantity must be a number'}, status: :unprocessable_entity
    end

end
