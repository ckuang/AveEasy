class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in(@user)
      render json: @user
    else
      render json: { message: "Invalid credentials" }, status: 401
    end
  end

  private
  def user_params
    params.require(:user).permit(:password, :username, :realtor, :realtor_company)
  end

end
