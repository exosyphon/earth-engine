class CreateRecords < ActiveRecord::Migration
  def change
    create_table :records do |t|
      t.text :title
      t.text :url

      t.timestamps null: false
    end
  end
end
