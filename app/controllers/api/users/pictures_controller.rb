class Api::Users::PicturesController < ApplicationController
  def index
    render json: Picture.all
  end

  def create
    picture = Picture.new(picture_params)
    if picture.save
      render json: picture
    else
      render json: { errors: picture.errors }, status: :unprocessable_entity
    end
  end

  def update
    picture = Picture.find(params[:id])
    item.update(complete: !picture.complete)
    render json: picture
  end

  def destroy
    Picture.find(params[:id]).destroy
    render json: { message: 'Picture deleted' }
  end

  private

  def picture_params
    params.require(:picture).permit(:url, :views, :title, :description, :user_id, :category_id)
  end
end
