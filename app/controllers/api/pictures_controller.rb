class Api::PicturesController < ApplicationController

  def index
    # render json: Picture.search(params[:search], params[:page])
    render json: Picture.limit(10)
  end
  
  def show
    render json: Picture.find(params[:id])
  end

  def update
    picture = Picture.find(params[:id])
    if picture.update(picture_params)
      render json: picture
    else
      render json: { message: "Picture not updated!"}
    end  
  end

  private

  def picture_params
    params.require(:picture).permit(:views, :user_id, :category_id, :description, :url, :title)
  end

end
