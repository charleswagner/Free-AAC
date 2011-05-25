class Category < ActiveRecord::Base

  has_many :words
  
  has_attached_file :picture, 
                    :styles => {:normal => "180x180"},
                    :storage => :s3, 
                    :s3_credentials => "#{RAILS_ROOT}/config/s3.yml",
                    :path => "freeacc/:attachment/:style/:id.:extension"

end