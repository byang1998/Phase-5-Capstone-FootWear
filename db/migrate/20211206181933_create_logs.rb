class CreateLogs < ActiveRecord::Migration[6.1]
  def change
    create_table :logs do |t|
      t.string :date
      t.string :entry
      t.integer :shoe_id

      t.timestamps
    end
  end
end
