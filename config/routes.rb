Rails.application.routes.draw do
  mount ActionCable.server => "/cable"

  resources :rooms, only: [:index, :show, :create]
  resources :chatrooms, only: [:index, :show, :create]
  resources :messages, only: [:index, :create, :update, :destroy]
  resources :users, only: [:index, :show,:create,:update]

  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  post "/signin", to: "sessions#create"
  delete "/signout", to: "sessions#destroy"
  put "/profile", to: "users#update"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
