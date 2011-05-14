class Word < ActiveRecord::Base

  has_many :images
  
  has_many :phrase_words
  has_many :phrases, :through => :phrase_words

end
