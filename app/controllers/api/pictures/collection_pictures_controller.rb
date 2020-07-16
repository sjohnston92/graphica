class Api::Pictures::CollectionPicturesController < ApplicationController
  before_action :set_picture
  def index
    render json: @picture.collection_pictures
  end

  private

  def set_picture
    @picture = Picture.find(params[:picture_id])
  end
end
