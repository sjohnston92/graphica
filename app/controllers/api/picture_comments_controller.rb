class Api::PictureCommentsController < ApplicationController
  def index
    render json: PictureComment.all
  end

  def create
    picture_comment = PictureComment.new(picture_comment_params)
    if picture_comment.save 
      render json: picture_comment
    else 
      render json { errors: picture_comment.errors }, status: :unprocessable_entity 
  end

  def update
    picture_comment = PictureComment.find(params[:id])
    if picture_comment.save
      picture_comment.update(complete: !picture_comment.complete)
      render json: picture_comment
    else 
      render json { errors: picture_comment.errors }, status: :unprocessable_entity 
  end

  def destroy
    User.find(params[:id]).destroy
    render json: {message: 'Delete Successful' }
  end

  private

  def picture_comment_params
    params.require(:picture_comment).permit(:body, :picture_id, :user_id)
  end

end
