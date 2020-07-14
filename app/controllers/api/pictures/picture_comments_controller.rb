class Api::Pictures::PictureCommentsController < ApplicationController
  before_action :set_picture
  
  def index
    array = @picture.picture_comments.all
    array_rev = array.reverse
    render json: array_rev
  end

  private

  def set_picture
    @picture = Picture.find(params[:picture_id])
  end
end
