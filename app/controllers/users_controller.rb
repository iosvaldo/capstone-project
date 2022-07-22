class UsersController < ApplicationController
  # skip_before_action :authenticate_user

  def index
    users = User.all
    render json: UserSerializer.new(users)
  end

  def create
    user = User.create!(user_params)
    if user
      room = Room.create(name: user.username, description: "This is the beginning of your new room")
      user_rooms = UserRooms.create(user_id: user.id, room_id: room.id)
      message = Message.create(body: "This is the beginning of your new message", room_id: room.id, user_id: user.id)
    else
      render json: {message: "the system ran into an error when creating your account"}
  end
end

def show
render json: User.find(params[:id])
end

private

  def user_params
    params.permit(:username, :password)
  end

end
