class Api::SessionsController < ApplicationController

  def show
    if signed_in?
      @current_user = current_user
    else
      render json: {message: "Not logged in"}, status: 401
    end
  end

  def create
    @current_user = User.find_by_credentials(
      params["user"]["username"],
      params["user"]["password"]
    )

    if @current_user
      sign_in(@current_user)
    else
      render json: { message: "Invalid credentials" }, status: 401
    end

  end

  def destroy
    sign_out
    render json: {}
  end


end
