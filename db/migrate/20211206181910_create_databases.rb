class CreateDatabases < ActiveRecord::Migration[6.1]
  def change
    create_table :databases do |t|
      t.string :image
      t.string :name
      t.string :description

      t.timestamps
    end
  end
end
