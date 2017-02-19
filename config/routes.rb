Rails.application.routes.draw do
  root 'home#index'
  resources :words, only: [:index]
  resources :genres, only: [:index]
  resources :band_name, only: [:index, :show, :create]
end
