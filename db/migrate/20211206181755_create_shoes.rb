class CreateShoes < ActiveRecord::Migration[6.1]
  def change
    create_table :shoes do |t|
      t.string :shoe_name
      t.integer :user_id
      t.integer :database_id

      t.timestamps
    end
  end
end
