class RoomSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :description
  # attribute :users do |room|
  #   UserSerializer.new(room.users.uniq)
  # end
end
