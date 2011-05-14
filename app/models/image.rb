class Image < ActiveRecord::Base

  belongs_to :word
  
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

end