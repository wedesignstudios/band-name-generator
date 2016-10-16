require 'csv'

csv_text = File.read('seed_words.csv')
csv = CSV.parse(csv_text, headers: true)

csv.each do |row|
  row.to_hash
  w = Word.new
  w.string = row['string']
  w.save
  puts "#{w.string} saved"
end

puts "#{Word.count} new words created in Words table."