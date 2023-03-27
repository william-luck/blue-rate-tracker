class SessionsController < ApplicationController

    # POST /login
    # Creates session
    def create
        user = User.find_by(email: params[:email])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user
        else
            # Return error as json if invalid username or password
            render json: {errors: ['Email or password is incorrect']}, status: :unauthorized
        end
    end

    # DELETE /logout
    def destroy
        user = User.find(session[:user_id])
        if user
            session.clear
            head :no_content
        end
    end


end
