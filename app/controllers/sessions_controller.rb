class SessionsController < ApplicationController
  skip_before_action :authenticate_user

  def create
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: UserSerializer.new(user).serialized_json, status: :created
    else
      render json: { errors: ["Invalid credentials"] }, status: :unauthorized
    end
  end

  #DELETE /logout
  def destroy
    session.delete(:user_id)
    head :no_content
  end 

end
