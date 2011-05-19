FreeAcc::Application.routes.draw do
  
  resources :phrases
  resources :images

  root :to => "words#index"

end