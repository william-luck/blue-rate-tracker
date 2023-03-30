class MenuItemsController < ApplicationController

    def index
        menu_items = MenuItem.all.order('name ASC')
        render json: menu_items, status: :ok
    end

    def create

        created_menu_item = MenuItem.new(menu_item_params)
        created_menu_item.menu_id = Menu.find_by(name: params[:menu]).id
        created_menu_item.save! 

        pending_ingredients = params[:entities]
        pending_ingredients.each { |ingredient| 
            ingredient[:quantity] = ingredient[:quantity].to_f/1000
            created_ingredient = Ingredient.new(ingredient_params(ingredient))
            created_ingredient.menu_item_id = created_menu_item.id
            created_ingredient.save!
        }

        render json: created_menu_item, status: :created

    end


    private 

    def menu_item_params
        params.permit(:name)
    end

    def ingredient_params(ingredient)
        ingredient.permit(:product_id, :quantity)
    end

end
