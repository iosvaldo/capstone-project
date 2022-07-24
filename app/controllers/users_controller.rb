class UsersController < ApplicationController
  skip_before_action :authenticate_user

  def index
    users = User.all
    render json: UserSerializer.new(users).serialized_json
    # render json: users
  end

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: UserSerializer.new(user).serialized_json, status: :created
  #   if user
  #     room = Room.create(name: user.username, description: "This is the beginning of your new room")
  #     user_rooms = UserRooms.create(user_id: user.id, room_id: room.id)
  #     message = Message.create(body: "THis is the beginning of your new message", room_id: room.id, user_id: user.id)
     
  #   else
  #     render json: {message: "the system ran into an error when creating your account"}
  # end
end

  def show
    user = User.find_by(params[:user_id])
    render json: UserSerializer.new(user).serialized_json, status: :ok
  end

  def update
    user = User.find(params[:id])
    user.update!(user_params)
    render json: UserSerializer.new(user).serialized_json, status: :ok
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
