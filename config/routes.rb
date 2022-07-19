Rails.application.routes.draw do
  root 'home#index'
  resources :users
  namespace :api, defaults: {format: :json} do
    root 'root#home'
    post 'accounts/sign_in', to: 'accounts#sign_in'
    post 'accounts/sign_out', to: 'accounts#sign_out'
    resources :users, except: [:edit, :new] do
      collection do
        post :send_verify
        get :me
      end
    end
    
    resources :products

    resources :orders do
      collection do
        post :pre_pay
        post :notify
      end
    end
    # match '*path', to: 'root#route_not_found', via: :all
  end
  get '*path', to: 'home#index', via: :all
end
