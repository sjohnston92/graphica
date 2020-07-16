class Api::Search::PicturesController < ApplicationController
  def search
    render json: Picture.search(params[:search], params[:page])
  end
end
