class Api::UsersController < ApplicationController
  before_action :authenticate_user!
  before_action :set_user, only: [:update_profile_image, :update_banner_image]

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

    if user.update(user_params)
      render json: user
    else 
      render json: { errors: user.errors }, status: :unprocessable_entity 
    end
  end

  def update_profile_image
    file = params[:file]

    if file
      begin
        ext = File.extname(file.tempfile)
        cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true)
        @user.image = cloud_image['secure_url']
        
        if @user.save
          render(json: @user)
        else
          render(json: { errors: @user.errors.messages }, status: 422)
        end
      rescue => e
        render json: { errors: e }, status: 422
      end
    end
  end

  def update_banner_image
    file = params[:file]

    if file
      begin
        ext = File.extname(file.tempfile)
        cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true)
        @user.banner_image = cloud_image['secure_url']
        
        if @user.save
          render(json: @user)
        else
          render(json: { errors: @user.errors.messages }, status: 422)
        end
      rescue => e
        render json: { errors: e }, status: 422
      end
    end
  end

  # def update
  #   user = User.find(params[:id])
  #   user.first_name = params[:first_name] ? params[:first_name] : user.first_name
  #   user.last_name = params[:last_name] ? params[:last_name] : user.last_name
  #   user.email = params[:email] ? params[:email] : user.email
  #   user.tagline = params[:tagline] ? params[:tagline] : user.tagline

  #   file = params[:file]
  #   if file
  #     begin
  #       ext = File.extname(file.tempfile)
  #       cloud_image = Cloudinary::Uploader.upload(
  #         file, public_id: file.original_filename, secure: true 
  #       )
  #       user.image = cloud_image['secure_url']
  #     rescue => e 
  #       render json: { errors: e }, status: 422
  #     end
  #   end
  #   if user.save
  #     render json: user
  #   else
  #     render json: { errors: user.errors.full_messages }, status: 422
  #   end
  # end



  def destroy
    User.find(params[:id]).destroy
    render json: {message: 'Delete Successful' }
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :tagline)
  end

  def set_user
    @user = User.find(params[:id])
  end
end
