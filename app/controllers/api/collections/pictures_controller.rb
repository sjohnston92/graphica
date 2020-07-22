class Api::Collections::PicturesController < ApplicationController
  before_action :set_collection

  def index
    render(json: @collection.pictures )
  end

  private

  def set_collection
    @collection = Collection.find(params[:collection_id])
  end
end
