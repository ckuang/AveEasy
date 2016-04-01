Rails.application.routes.draw do
  root "static_pages#root"

  resources :users, only: [:new, :create]

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:new, :create, :destroy]
    resources :listings, only: [:index]
  end
end
