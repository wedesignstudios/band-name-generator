class ChangeArticle < ActiveRecord::Migration[5.0]
  def change
    rename_column :words, :article, :begins_with_word
  end
end
