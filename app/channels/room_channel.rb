class RoomChannel < ApplicationCable::Channel

  def subscribed
    stop_all_streams
    @room = Room.find(params[:room])
    stream_for @room
  # stream_for auto generates a broadcast from the room channel
  end

  # broadcast_to comes off the channel class. You use this after you've created a channel. Let's say you want to notify all the subscribers of blog post comments
   def received(data)
    RoomChanne.broadcast_to(room, { 
      room: room, 
      users: room.users, 
      messages: room.messages 
      })
  end

  def unsubscribed
    stop_all_streams
  end
end
