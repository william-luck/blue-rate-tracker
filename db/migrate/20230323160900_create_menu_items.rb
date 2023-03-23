class CreateMenuItems < ActiveRecord::Migration[6.1]
  def change
    create_table :menu_items do |t|
      t.int :menu_id
      t.string :name

      t.timestamps
    end
  end
end
