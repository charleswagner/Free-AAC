FreeAcc::Application.routes.draw do
  
  resources :phrases
  
  resources :words do
    resources :images
    collection do 
      get :search
    end
  end

  resources :images do 
    member do
       put :upvote
       put :downvote
     end
  end
  
  devise_for :users
  
  match 'users/edit', :to => 'users#edit', :as => :user_root # Rails 3
  
  root :to => "words#index"

end