class RoomsController < ApplicationController

  def index
    rooms = Room.all
    render json: RoomSerializer.new(rooms)
  end

  def show
    room = Room.find(params[:id])
    render json: RoomSerializer.new(room)
  end

  def create
    room = Room.create(rooms_parms)
    user = User.find(params[:user_id]);
    if user
      chat = Chat.create(user_id: user.id, room_id: room.id)
    end
    render json: RoomSerializer.new(room)
  end

  private

  def rooms_parms
    params.permit(:name, :description)
  end


end
