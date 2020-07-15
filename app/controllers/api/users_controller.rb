class Api::UsersController < ApplicationController

  def index
    render json: User.all
  end

  def show
   render json: User.find(params[:id])
  end

  def create
    user = User.new(user_params)
    if user.save 
      render json: user
    else 
      render json: { errors: user.errors }, status: :unprocessable_entity 
    end
  end

  def update
    user = User.find(params[:id])

    # file = params[:file]

    # if file
    #   begin
    #     ext = File.extname(file.tempfile)
    #     cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true)
    #     user.image = cloud_image['secure_url']
    #   rescue => e
    #     render json: { errors: e }, status: 422
    #   end
    # end

    if user.update(user_params)
      render json: user
    else 
      render json: { errors: user.errors }, status: :unprocessable_entity 
    end
  end

  def destroy
    User.find(params[:id]).destroy
    render json: {message: 'Delete Successful' }
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :tagline, :image, :banner_image)
  end
end
