class CreateWords < ActiveRecord::Migration[5.0]
  def change
    create_table :words do |t|
      t.string :string

      t.timestamps null: false
    end
  end
end
