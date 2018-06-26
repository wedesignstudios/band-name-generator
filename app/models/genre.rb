class Genre < ApplicationRecord
  validates :name, presence: :true
  validates_uniqueness_of :name

  has_many :band_names
end
