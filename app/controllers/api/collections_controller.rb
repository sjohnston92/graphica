class Api::CollectionsController < ApplicationController
  def index
    render json: Collection.all
  end

  def show
  end

end
