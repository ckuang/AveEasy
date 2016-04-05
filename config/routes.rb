Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:new, :create, :destroy, :show]
    resources :users, only: [:create]
    resources :saved_listings, only: [:create, :destroy]
    resources :listings, only: [:index, :show]
  end

  get '*path' => "static_pages#root"

end
