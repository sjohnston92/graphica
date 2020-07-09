class Api::Pictures::PictureCommentsController < ApplicationController
  before_action :set_picture
  
  def index
    render json: @picture.picture_comments.all
  end

  private

  def set_picture
    @picture = Picture.find(params[:picture_id])
  end
end
