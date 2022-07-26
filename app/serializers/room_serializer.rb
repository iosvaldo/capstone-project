class RoomSerializer < ActiveModel::Serializer
  attributes :id, :room_name, :room_body
end
