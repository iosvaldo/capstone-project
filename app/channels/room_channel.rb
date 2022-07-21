class RoomChannel < ApplicationCable::Channel

  def subscribed
    @room = Room.find_by(id: params[:room])
    @user = User.find_by(id: params[:user])
    stream_for @room
  # stream_from auto generates a broadcast from the room channel
    appear
  end

  # broadcast_to comes off the channel class. You use this after you've created a channel. Let's say you   want to notify all the subscribers of blog post comments
  def appear
    @user.update(active: "inactive")
    RoomChannel.broadcast_to(@room,){
      room.RoomSerializer.new(@room),
      users.UserSerializer.new(@room.users),
      messages @room.messages
    }
  end

  def unsubscribed
    disappear
  end

  def disappear
    @user.update(active: "inactive")
     RoomChannel.broadcast_to(@room,){
      room.RoomSerializer.new(@room),
      users.UserSerializer.new(@room.users),
      messages @room.messages
    }
  end
end
