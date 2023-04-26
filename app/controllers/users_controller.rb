class UsersController < ApplicationController

    # GET /me 
    def show
        # Finds user according to session id cookie, returns corresponding user instance
        user = User.find(session[:user_id])
        render json: user, status: :created
    end

end
