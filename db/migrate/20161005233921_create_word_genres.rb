class CreateWordGenres < ActiveRecord::Migration[5.0]
  def change
    create_table :word_genres do |t|
      t.integer :word_id
      t.integer :genre_id

      t.timestamps null: false
    end
  end
end
