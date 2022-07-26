class RoomSerializer < ActiveModel::Serializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :description,:users, :messages
   attribute :users do |room|
   UserSerializer.new(room.users.uniq).serializable_hash
   end
end
