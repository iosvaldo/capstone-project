class UserRoomsController < ApplicationController

    def create
        user = User.find_by(username: params[:username])
        user_rooms = UserRoom.create(user_id: user.id,room_id: params[:room_id])
        room = Room.find(params[:room_id])
        if room
            puts "successfully saved a message!"
            RoomsChannel.broadcast_to(room, {
                room: RoomSerializer.new(room),
                users: UserSerializer.new(room.users),
                messages:  room.messages
            })
            render json: room
        end
        
    end
    def leave
        room = Room.find(params[:room_id])
        user_rooms = UserRoom.find_by(user_id: params[:user_id],room_id: room.id)
        if user_rooms
            # puts user_rooms
            UserRoom.delete(user_rooms.id)
            RoomsChannel.broadcast_to(room, {
                room: room,
                users: UserSerializer.new(room.users),
                messages: room.messages
            })
            render json: user_rooms
        end
        puts user_rooms
    end
end
