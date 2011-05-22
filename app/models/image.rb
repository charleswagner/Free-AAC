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
  
  validates_attachment_size :picture, :less_than => 500.kilobytes, :if => lambda { picture.dirty? }
  
  #Rails3 Bug, need to patch paperclip gem
  #validates_attachment_content_type :picture, :content_type => ['image/jpeg', 'image/png']
  
  validate :image_is_a_square
  
  def image_is_a_square
     dimensions = Paperclip::Geometry.from_file(self.picture.queued_for_write[:original])
     if !square(dimensions.width, dimensions.height)
       self.errors.add_to_base("Please upload a picture 400x400 pixels") 
     end
   end
   
   def square(width, height)
     if (360..440).include?(width) && (360..440).include?(height)
       true
     else
       false
     end
   end

end