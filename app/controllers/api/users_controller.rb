class Api::UsersController < ApplicationController

  def create
    @current_user = User.new(user_params)
    if @current_user.save
      sign_in(@current_user)
    else
      render json: { message: "Invalid credentials" }, status: 401
    end
  end

  private
  def user_params
    params.require(:user).permit(:password, :username, :realtor, :realtor_company)
  end

end
