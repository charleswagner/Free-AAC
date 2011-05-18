class Image < ActiveRecord::Base

  belongs_to :word
  
  belongs_to :user
  
  has_many :votes

  has_attached_file :picture, 
                    :styles => {
                                :xlarge => "400x400>",
                                :large => "300x300>",
                                :medium => "200x200>",
                                :small => "100x100>",
                                :thumbnail => "50x50>"
                                },
                    :storage => :s3, 
                    :s3_credentials => "#{RAILS_ROOT}/config/s3.yml",
                    :path => "freeacc/:attachment/:style/:id.:extension"

  validates_attachment_presence :picture 
  
  after_save :send_to_editor
  before_destroy :send_to_editor
  
  def send_to_editor
    if self.word.images.blank?
      self.word.update_attribute(:published, false)
    else
      self.word.update_attribute(:published, true)
    end
  end

  def user_already_upvoted(current_user)
    return false if !current_user 
    self.votes.each do |v|
      return true if v.user.id == current_user.id && v.up == true
    end
    false
  end
  
  def user_already_downvoted(current_user)
    return false if !current_user 
    self.votes.each do |v|
      return true if v.user.id == current_user.id && v.down == true
    end
    false
  end
  
  def destroy_up_vote(current_user)
   self.votes.each do |v|
     if v.user.id == current_user.id && v.up == true
      v.destroy
      self.update_attribute(:vote_count, self.vote_count -= 1)
     end
    end
  end
  
  def destroy_down_vote(current_user)
   self.votes.each do |v|
      if v.user.id == current_user.id && v.down == true
       v.destroy
       self.update_attribute(:vote_count, self.vote_count += 1)
      end
    end
  end

  # if image is not a square then tell user to upload a square??
  #   within %10 and make sure it is kinda big (400 +) ???

end