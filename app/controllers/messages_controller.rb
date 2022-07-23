class MessagesController < ApplicationController

  def index
    messages = Message.all
    render json: messages
  end

  def create
    message = Message.new(message_params)
    room = Room.find(params[:room_id])
    if message.save
        puts "message saved!"
        RoomChannel.broadcast_to(room, {
            room: room,
            users: room.users,
            messages: room.messages
        })
    end
    render json: message
  end


  def update
    message = Message.find(params[:id])
    message.update!(message_params)
    render json: message, status: :ok
  end

  def show
    render json: Message.find(params[:id])
  end

  def destroy
    Message.find(params[:id]).destroy
    head :no_content
  end

  private

  def message_params
    params.require(:message).permit(:body, :user_id, :room_id)
  end

end
