class Api::Users::PicturesController < ApplicationController
  before_action :set_user

  def index
    render json: Picture.all
  end

  def create
    picture = @user.pictures.new
    file = params[:file]
    
    if file
      begin
        image_name = "file"
        
        ext = File.extname(file.tempfile)
        binding.pry
        cloud_image = Cloudinary::Uploader.upload(image_name, public_id: file.original_filename, secure: true)
        binding.pry
        picture.url = cloud_image['secure_url']
        binding.pry
        
        if picture.save
          binding.pry
          render json: picture
        else
          binding.pry
          render json: { errors: picture.errors }, status: 422
        end
      rescue => e
        binding.pry
        render json: { errors: e }, status: 422
      end
    end
    # picture = Picture.new(picture_params)
    # if picture.save
    #   render json: picture
    # else
    #   render json: { errors: picture.errors }, status: :unprocessable_entity
    # end
  end

  def update
    picture = Picture.find(params[:id])
    if picture.update(picture_params)
      render json: picture
    else 
      render json: { errors: picture.errors }, status: :unprocessable_entity 
    end
  end

  def destroy
    Picture.find(params[:id]).destroy
    render json: { message: 'Picture deleted' }
  end

  private

  def picture_params
    params.require(:picture).permit(:url, :views, :title, :description, :user_id, :category_id)
  end

  def set_user
    @user = User.find(params[:user_id])
  end
end
