class UserSerializer < ActiveModel::Serializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :username, :password_digest, :active
  # attribute :rooms do |user|
  #   user.rooms.uniq
  # end

  # Lines 4,5,6 interfear with signing in. I keep getting this error whenever i do...
  # ||||||||||| ERROR  BELOW ||||||
  # app/serializers/user_serializer.rb:5:in `block in <class:UserSerializer>'
  # app/controllers/sessions_controller.rb:8:in `create'
end
