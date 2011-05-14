class Phrase < ActiveRecord::Base

  has_many :phrase_words
  has_many :words, :through => :phrase_words

end