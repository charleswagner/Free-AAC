FreeAcc::Application.routes.draw do
  
  resources :phrases
  resources :images do
    collection do
      get :search
    end
  end
  
  root :to => "words#index"

end