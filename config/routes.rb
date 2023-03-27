Rails.application.routes.draw do
  
  resources :menu_items
  resources :users
  resources :menus
  resources :ingredients
  resources :products

  # Login and logout routes, sessions controller
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  # Auto login and signup, users controller
  get '/me', to: 'users#show'
  post '/signup', to: 'users#create'
  


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
