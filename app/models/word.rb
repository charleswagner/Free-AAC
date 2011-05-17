class Word < ActiveRecord::Base

  has_many :images, :order => 'votes DESC'
  
  has_many :phrase_words
  has_many :phrases, :through => :phrase_words
  
  validates_presence_of :english
  
  before_save :down_case_word
  
  def down_case_word
    self.english = self.english.downcase
  end

end
