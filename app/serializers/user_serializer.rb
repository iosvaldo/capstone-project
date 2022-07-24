class UserSerializer < ActiveModel::Serializer
  # include FastJsonapi::ObjectSerializer
  attributes :id, :username, :password_digest, :active
  # attribute :chatrooms do |user|
  #   user.chatrooms.uniq
  # end
end
