class Api::Collections::CollectionPicturesController < ApplicationController
  def index
    collection = Collection.find(params[:collection_id])
    render json: collection.collection_pictures
  end
end
