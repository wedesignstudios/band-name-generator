class CreateBandName < ActiveRecord::Migration[5.0]
  def change
    create_table :band_names do |t|
      t.string :name
      t.integer :genre_id

      t.timestamps null: false
    end
  end
end
