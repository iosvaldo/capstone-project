class UserRoomsController < ApplicationController

    def create
        # user = User.find_by(username: params[:username])
        user_rooms = UserRoom.create!(user_rooms_params)
        render json: user_rooms
        # user_rooms = UserRoom.create(user_id: user.id, room_id: params[:room_id])
        
        # room = Room.find(params[:room_id])
        #     if room
        #         puts 'Messave Saved!' 
        #     end
        #     render json: room
    end

    private 

    def user_rooms_params
        params.permit(:room_id, :user_id)
    end

end
