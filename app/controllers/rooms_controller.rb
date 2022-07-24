class RoomsController < ApplicationController
  before_action :authenticate_user

  def index
    rooms = Room.all
    render json: RoomSerializer.new(rooms).serialized_json
  end

  def show
    room = Room.find(params[:id])
    render json: RoomSerializer.new(room).serialized_json
   end

  def create
    room = Room.create!(rooms_params)
    session[:room_id] = room.id
    # users = User.find_by(params[:user_id]);
    # if 
    #   user_rooms = UserRoom.create(user_id: user.id, room_id: room.id)
    # else
    render json: RoomSerializer.new(room).serialized_json, status: :created
    # end
  end

  private

  def rooms_params
    params.permit(:name, :description)
  end

end
