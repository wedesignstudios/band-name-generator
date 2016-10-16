class AddArticleToWords < ActiveRecord::Migration[5.0]
  def change
    add_column :words, :article, :boolean, default: false
  end
end
