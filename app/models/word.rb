class Word < ApplicationRecord
  validates :string, presence: :true
  validates_uniqueness_of :string, :message => '%{value} already exists in the database'

  def self.build_band_name(number_of_words)
    band_name = []

    number_of_words.times { band_name.push(self.get_random_word.string) }
    band_name.join(' ')   
  end
  
  def self.get_random_word
    Word.offset(rand(Word.count)).first
  end

end
