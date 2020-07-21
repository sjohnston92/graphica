class Api::CollectionsController < ApplicationController
  def index
    render json: Collection.search(params[:search], params[:page])
  end

  def show
    render json: Collection.find(params[:id])
  end

end
