class MessagesController < ApplicationController
  def index
        messages = Message.all
        render json: messages
    end

    def create
        message = Message.new(message_params)
        room = Room.find(message_params["room_id"])
        if message.save
            puts "message saved!"
            RoomsChannel.broadcast_to(room, {
                room: RoomSerializer.new(room),
                users: UserSerializer.new(room.users),
                messages: room.messages
            })
        end
        render json: MessageSerializer.new(message)
    end

    def update
      message = Message.find(params[:id])
      message.update!(message_params)
      render json: message, status: :ok
    end

    def destroy
      Message.find(params[:id]).destroy
      head :no_content
    end


    private

    def message_params
        params.require(:message).permit(:content, :user_id, :room_id)
    end
end
