class Api::CategoriesController < ApplicationController

  def index
    render json: Categories.all
  end

  def show
    render json: Categories.all
  end

  def create
    category = Category.new(category_params)
    if category.save 
      render json: category
    else 
      render json: { errors: category.errors }, status: :unprocessable_entity 
    end
  end

  def update
    category = Category.find(params[:id])
    if category.update(category_params)
      render json: category
    else 
      render json: { errors: category.errors }, status: :unprocessable_entity 
    end
  end

  def destroy
    Category.find(params[:id]).destroy
    render json: {message: 'Delete Successful' }
  end

  private

  def category_params
    params.require(:picture).permit(:title, :description)
  end

end
