class Api::UsersController < ApplicationController

  def index
    render json: User.all
  end

  def show
  end

  def new
    user = User.new
  end

  def create
    user = User.new(user_params)
    if user.save 
      render json: user
    else 
      render json { errors: user.errors }, status: :unprocessable_entity 
  end

  def update
    user = User.find(params[:id])
    if user.save
      user.update(complete: !user.complete)
      render json: user
    else 
      render json { errors: user.errors }, status: :unprocessable_entity 
  end

  def destroy
    User.find(params[:id]).destroy
    render json: {message: 'Delete Successful' }
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :tagline, :image, :banner_image)
  end
end
