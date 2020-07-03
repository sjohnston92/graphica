class Api::CollectionsController < ApplicationController
  def index
    render json: Collection.search(params[:search], params[:page])
  end
end
