module ApplicationHelper

  def link_to_create_user(user)
    if user
      "Create"
    else
      link_to "Create", new_user_registration_path    
    end
  end

  def link_to_login_user(user)
    if user
      "Login"
    else
      link_to "Login", new_user_session_path
    end
  end

end