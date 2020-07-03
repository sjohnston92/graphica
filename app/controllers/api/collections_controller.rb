class Api::CollectionsController < ApplicationController
  def index
    render json: Collection.all
    @posts = Post
    .where('title ILIKE :q', q: "%#{params[:search]}%")
    .page(params[:page]).per(18)
  end
end
