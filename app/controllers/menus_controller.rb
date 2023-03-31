class MenusController < ApplicationController

    def index
        menus = Menu.all.order('name ASC')
        render json: menus, include: ['menu_items', 'menu_items.ingredients', methods: :find_price_per_quantity]
    end

    def create

        menu = Menu.create!(menu_params)

        render json: menu, status: :created
    end

    def update
        menu = Menu.find(params[:id])
        menu.update!(menu_params)

        render json: menu, status: :accepted
    end

    private
    
    def menu_params
        params.permit(:name, :user_id)
    end
    
end
