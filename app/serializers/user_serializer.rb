class UserSerializer < ActiveModel::Serializer
  # include FastJsonapi::ObjectSerializer
  attributes :id, :name, :username,:chatrooms, :profile_img, :bio
  
end
