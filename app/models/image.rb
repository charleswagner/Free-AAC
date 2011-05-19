class Image < ActiveRecord::Base

  attr_accessor :terms_and_conditions

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
  
  # if image is not a square then tell user to upload a square??
  #   within %10 and make sure it is kinda big (400 +) ???

end