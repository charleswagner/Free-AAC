class PhraseWords < ActiveRecord::Base

  belongs_to :phrase
  belongs_to :word

end