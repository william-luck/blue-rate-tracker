class MenusController < ApplicationController

    def index
        menus = Menu.all
        render json: menus, include: ['menu_items', 'menu_items.ingredients', methods: :find_price_per_quantity]
    end
    
end
