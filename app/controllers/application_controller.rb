class ApplicationController < ActionController::API
  include ActionController::Cookies

  def encode(payload)
    JsonWebToken.encode(payload)
  end

  def decode(token)
    JsonWebToken.decode(token)
  end

  def create
    user =User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      payload = {"user_id": user.id}
      token = encode(payload)
      render json {
        user UserSerializer.new(user),
        token:token,
        authenticated: true,
        user_rooms: RoomSerializer.new(user.rooms)
      }
    else
      render json: {
        message: 'Username  & password cant be found',
        authenticated: false
      }
  end

end

end
