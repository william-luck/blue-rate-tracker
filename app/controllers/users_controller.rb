class UsersController < ApplicationController

    # GET /me 
    def show
        # Finds user according to session id cookie, returns corresponding user instance
        user = User.find(session[:user_id])
        render json: user, status: :created
    end

    # POST /signup
    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private
    
    def user_params
        params.permit(:name, :email, :password, :password_confirmation)
    end


end
