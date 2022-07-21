class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :username, :password_digest, :active
  # attribute :rooms do |user|
  #   user.rooms.uniq
  # end
end
