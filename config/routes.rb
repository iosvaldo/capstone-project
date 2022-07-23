Rails.application.routes.draw do
  
  resources :user_rooms, only: [:create]
  resources :rooms, only: [:index, :show, :create]
  resources :messages, only: [:index, :create]
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  get "/me", to: "users#show" ## retrieveing the user's data from the database using the sessions hash
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create" ## mapping the user create method for a POST request to /login
  delete "/logout", to: "sessions#destroy"

  root 'rooms#index'
  mount ActionCable.server => './cable' 
end
