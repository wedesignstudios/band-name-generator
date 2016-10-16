class Word < ApplicationRecord
  
  def self.get_random_word
    Word.offset(rand(Word.count)).first
  end

end
