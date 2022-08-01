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
