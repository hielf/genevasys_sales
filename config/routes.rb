Rails.application.routes.draw do
  root to: redirect('/order/new/')
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
        post :submit
        post :notify
        post :test
        get :order_pdf
      end
    end
    # match '*path', to: 'root#route_not_found', via: :all
  end
  get '*path', to: 'home#index', via: :all
  get '*hello_world', to: 'layouts#hello_world', via: :all
end
