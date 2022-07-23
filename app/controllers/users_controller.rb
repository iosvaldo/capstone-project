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
    if user
      room = Room.creaye(name: user.username, description: "This is the beginning of your new room")
      user_rooms = UserRooms.create(user_id: user.id, room_id: room.id)
      message = Message.create(body: "THis is the beginning of your new message", room_id: room.id, user_id: user.id)
      # payload = {'user_id': user.id}
      # token = encode(payload)
      # render json: {
      #   user: UserSerializer.new(user),
      #   token: token,
      #   authenticated: true
      # }
    else
      render json: {message: "the system ran into an error when creating your account"}
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
