class Genre < ApplicationRecord
  has_many :word_genres
  has_many :words, through: :word_genres
  belongs_to :band_name
end
