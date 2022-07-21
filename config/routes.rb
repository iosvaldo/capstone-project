Rails.application.routes.draw do
  
  resources :user_rooms, only: [:create]
  resources :rooms, only: [:index, :show, :create]
  resources :messages, only: [:index, :create]
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  root 'rooms#index'
  mount ActionCable.server => './cable' 
end
