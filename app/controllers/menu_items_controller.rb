class MenuItemsController < ApplicationController

    def index
        menu_items = MenuItem.all.order('name ASC')
        render json: menu_items, status: :ok
    end

    def create

        created_menu_item = MenuItem.new(menu_item_params)
        created_menu_item.menu_id = Menu.find_by(name: params[:menu]).id
        created_menu_item.price_ratio = 3.0
        created_menu_item.save! 

        pending_ingredients = params[:entities]
        pending_ingredients.each { |ingredient| 
            if (ingredient[:name] === 'egg')
                
                ingredient[:quantity] = ingredient[:quantity].to_f * 0.083333
            else 
                ingredient[:quantity] = ingredient[:quantity].to_f / 1000
            end

            created_ingredient = Ingredient.new(ingredient_params(ingredient))
            created_ingredient.menu_item_id = created_menu_item.id
            created_ingredient.save!
        }

        render json: created_menu_item, status: :created

    end

    def update
        menu_item = MenuItem.find(params[:id])
        menu_item.update!(menu_item_params)

        render json: menu_item, status: :accepted
    end

    def destroy

        menu_item = MenuItem.find(params[:id])
        menu_item.destroy
        render json: menu_item, status: :accepted
    end


    private 

    def menu_item_params
        params.permit(:name, :menu_id, :price_ratio)
    end

    def ingredient_params(ingredient)
        ingredient.permit(:product_id, :quantity)
    end

end
