class ChatroomSerializer < ActiveModel::Serializer
  attributes :id, :room_name,:users, :messages
end
