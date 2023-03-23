class MenusController < ApplicationController

    def index
        menus = Menu.all
        render json: menus, include: ['menu_items', 'menu_items.ingredients', 'menu_items.ingredients.product'] 

    end
end
