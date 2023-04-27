class MenusController < ApplicationController

    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_data_error

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

    def destroy
        menu = Menu.find(params[:id])
        menu.destroy
        render json: menu, status: :accepted
    end

    private
    
    def menu_params
        params.permit(:name, :user_id)
    end

    def render_invalid_data_error(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
    
end
