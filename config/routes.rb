Rails.application.routes.draw do
  
  resources :logs
  resources :databases
  resources :shoes
  resources :users

    # get "/login", to: "users#login"
    post "/login", to: "users#login"
    get "/my-account/:id", to: "users#show"
    post "/login", to: "users#login"
    post "/users", to: "users#create"
    patch "/users", to: "users#update"
    delete "/users/:id", to: "users#destroy"
    
    get "/shoes", to: "shoes#index"
    post "/shoes", to: "shoes#create"
    get "/my-account/:id", to: "shoes#show" 
    patch "/shoes/:id", to: "shoes#update"
    delete "/shoes/:id", to: "shoes#destroy"
  
    get "/descriptions", to: "databases#index"
    get "/descriptions/:id", to: "databases#show"
  end
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!


