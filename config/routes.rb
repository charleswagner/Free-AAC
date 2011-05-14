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
  
  
  root :to => "words#index"

end