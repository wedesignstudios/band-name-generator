Rails.application.routes.draw do
  root 'home#index'
  resources :words
  resources :genres
  resources :band_name, only: [:index, :show, :create]
end
