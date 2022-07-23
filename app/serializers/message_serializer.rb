class MessageSerializer < ActiveModel::Serializer
  attributes :user_id,:room_id,:body, :user, :created_at, :updated_at
end
