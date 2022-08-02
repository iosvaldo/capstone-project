class UsersController < ApplicationController
  skip_before_action :authorize, only: [:create]

  def index
    users = User.all
    render json: users
  end

  def show
    user = User.find_by(id: session[:user_id])
    render json: user, status: :ok
  end

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

   def update
    user = User.find(params[:id])
    user.update(user_params)
    render json: user
  end

  private

  def user_params
    params.permit(:name, :username, :password, :password_confirmation, :profile_img, :bio, :has_agreed)
  end
end
