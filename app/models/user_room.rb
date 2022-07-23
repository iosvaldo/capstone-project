class UserRoom < ApplicationRecord
  belongs_to :user
  belongs_to :room

  def create
    user = User.find_by(username: params[:username])
    user_rooms = UserRoom.create(user_id: user.id, room_id: params[:room_id])
    room = Room.find(params[:room_id])
    if room
      puts 'Messave Saved!'
      Room
    end
  end
end
