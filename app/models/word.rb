class Word < ApplicationRecord
  has_many :word_genres
  has_many :genres, through: :word_genres
end
