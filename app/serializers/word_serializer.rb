class WordSerializer < ActiveModel::Serializer
  attributes :id, :string, :begins_with_word
end
