class MessageSerializer
  include FastJsonapi::ObjectSerializer
  attributes :body, :id, :room_id, :user_id
  has_one :user
end
