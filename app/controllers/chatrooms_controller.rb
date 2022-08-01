class ChatroomsController < ApplicationController
  before_action :authorize

  def index
    current_user = User.find(session[:user_id])
    chatrooms = current_user.chatrooms.uniq
    render json: {
             chatrooms: chatrooms,
           }
  end

  def show
    chatroom = Chatroom.find(params[:id])
    render json: chatroom
  end


  def create
    chatroom = Chatroom.create(chatroom_params)
    render json: chatroom, status: :created
  end

  private

  def chatroom_params
    params.permit(:room_name)
  end
end
