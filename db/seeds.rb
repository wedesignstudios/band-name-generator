require 'csv'

# Seed Words
csv_words = File.read('seed_words.csv')
csv_word_seeds = CSV.parse(csv_words, headers: true)

csv_word_seeds.each do |row|
  row.to_hash
  w = Word.new
  w.string = row['string']
  w.save
  puts "#{w.string} saved"
end

puts "#{Word.count} new words created in Words table."

# Seed Genres
csv_genres = File.read('seed_genres.csv')
csv_genre_seeds = CSV.parse(csv_genres, headers: true)

csv_genre_seeds.each do |row|
  row.to_hash
  g = Genre.new
  g.name = row['name']
  g.save
  puts "#{g.name} saved"
end

puts "#{Genre.count} new genres created in Genres table."