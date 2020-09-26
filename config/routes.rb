# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }
  
  resources :products
  root 'products#index'

  resources :products, only: %i[index show]
  resources :users, only: %i[index show]
end
