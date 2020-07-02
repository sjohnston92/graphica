class Api::PicturesController < ApplicationController

  def index
    render json: Picture.all
  end

end
