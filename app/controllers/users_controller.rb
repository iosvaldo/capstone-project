class UsersController < ApplicationController
  skip_before_action :authenticate_user

  def index
    users = User.all
    # render json: UserSerializer.new(users)
    render json: users
  end

  def create
    user = User.create!(user_params)
    render json: user
  end

  def show
    render json: User.find(params[:id])
  end

  def update
    user = User.find(params[:id])
    user.update(active: params[:active]);
    # ActionCable.server.broadcast 'appear_channel', json_response(user)
    render json: user
  end

  def destroy
    User.find(params[:id]).destroy
    head :no_content
  end

private

  def user_params
    params.permit(:username, :password)
  end

end
