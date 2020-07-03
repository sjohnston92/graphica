class Api::PicturesController < ApplicationController

  def index
    render json: Picture.search(params[:search], params[:page])
  end
end
