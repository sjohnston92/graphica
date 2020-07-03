class Api::PicturesController < ApplicationController

  def index
    render json: Picture.all
    @posts = Post
    .where('title ILIKE :q', q: "%#{params[:search]}%")
    .page(params[:page]).per(18)
  end
end
