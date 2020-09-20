# frozen_string_literal: true

Rails.application.routes.draw do
  resources :products
  root 'products#index'

  resources :products, only: %i[index show]
  resources :users, only: %i[index show]
end
