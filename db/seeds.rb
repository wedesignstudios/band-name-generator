require 'csv'

# Seed Words
csv_words = File.read('seed_words.csv')
csv_word_seeds = CSV.parse(csv_words, headers: true)
current_word_count = Word.count

csv_word_seeds.each do |row|
  row.to_hash
  w = Word.new
  w.string = row['string']
  w.save
  if !w.save
    puts "\'#{w.string}\' already exists in the Words table and was not added."
  end
end

puts "#{current_word_count - Word.count} new start words created in Words table."

# Seed Genres
csv_genres = File.read('seed_genres.csv')
csv_genre_seeds = CSV.parse(csv_genres, headers: true)
current_genre_count = Genre.count

csv_genre_seeds.each do |row|
  row.to_hash
  g = Genre.new
  g.name = row['name']
  g.save
  if !g.save
    puts "\'#{g.name}\' already exists in the Genres table and was not added."
  end
end

puts "#{current_genre_count - Genre.count} new genres created in Genres table."

# Seed Start Words
csv_start_words = File.read('seed_start_words.csv')
csv_start_word_seeds = CSV.parse(csv_start_words, headers: true)
current_word_count = Word.count

csv_start_word_seeds.each do |row|
  row.to_hash
  w = Word.new
  w.string = row['string']
  w.begins_with_word = row['begins_with_word']
  w.save
  if !w.save
    puts "\'#{w.string}\' already exists in the Words table and was not added."
  end
end

puts "#{current_word_count - Word.count} new start words created in Words table."