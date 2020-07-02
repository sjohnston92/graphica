class Api::CollectionPicturesController < ApplicationController
    def index
      render json: CollectionPicture.all
    end
  
    def show
    end
  
    def new
      collection_picture = CollectionPicture.new
    end
  
    def create
      collection_picture = CollectionPicture.new(cp_params)
      if collection_picture.save 
        render json: CollectionPicture
      else 
        render json: { errors: user.errors }, status: :unprocessable_entity 
      end
    end
  
    def update
      collection_picture = CollectionPicture.find(params[:id])
      if collection_picture.update(cp_params)
        render json: user
      else 
        render json: { errors: collection_picture.errors }, status: :unprocessable_entity 
      end
    end
  
    def destroy
      CollectionPicture.find(params[:id]).destroy
      render json: {message: 'Delete Successful' }
    end
  
    private
  
    def cp_params
      params.require(:collection_picture).permit(:picture_id, :collection_id)
    end  
end
