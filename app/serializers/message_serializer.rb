class MessageSerializer < ActiveModel::Serializer
  attributes :id, :body, :user_id, :room_id
end
