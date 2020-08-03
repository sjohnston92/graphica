class Api::FavoritesController < ApplicationController
  before_action :set_user, only: [:index]

  def index
    render json: @user.favorites
  end

  def show
  end

  def create
    favorite = Favorite.new(favorite_params)
    if favorite.save 
      render json: favorite
    else 
      render json: { errors: favorite.errors }, status: :unprocessable_entity 
    end
  end

  def update
  end

  def destroy
  end

  private

  def set_user
    @user = User.find(params[:user_id])
  end

  def favorite_params
    params.require(:favorite).permit(:picture_id, :user_id)
  end

  

end
