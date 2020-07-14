class Api::PicturesController < ApplicationController

  def index
    render json: Picture.search(params[:search], params[:page])
  end
  
  def show
    render json: Picture.find(params[:id])
  end
end
