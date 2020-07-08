Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    resources :picture_comments
    resources :categories
    resources :collection_pictures

    resources :users do
      resources :pictures, module: :users
      resources :collections, module: :users
    end
    #These are for searching globally
    resources :pictures, only: [:index]
    resources :collections, only: [:index] do 
      resources :pictures, only: [:index], module: :collections
    end   
  end
end
