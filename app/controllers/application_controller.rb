class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordInvalid, with: :render_validation_errors
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  before_action :authenticate_user

  def current_user
    @user ||= User.find_by_id(session[:user_id])
  end

  def render_validation_errors(e)
    render json: {errors: e.record.errors.full_messages}, status: :unprocessable_entity
  end

  def record_not_found(e)
    render json: {error: e.message}, status: :not_found
  end

  def authenticate_user
    if current_user
    return 
    render json: { errors: "You must be logged in to do that." }, status: :unauthorized
    end
  end

end


