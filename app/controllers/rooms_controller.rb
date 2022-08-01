class RoomsController < ApplicationController
  skip_before_action :authorize

  def index
    rooms = Room.all
    render json: rooms
  end

  def show
    room = Room.find(params[:id])
    render json: room, status: :ok
  end

  def create
    room = Room.create!(rooms_params)
    chatrooms = Chatroom.create!(room_name: params[:room_name])
    render json: room, status: :created
  end

  def destroy
    Room.find(params[:id]).destroy
    head :no_content
  end

 private

  def rooms_params
    params.permit(:room_name, :room_body)
  end

end
