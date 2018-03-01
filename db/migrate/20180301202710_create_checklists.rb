class CreateChecklists < ActiveRecord::Migration[5.1]
  def change
    create_table :checklists do |t|
      t.string :name

      t.timestamps
    end

    create_table :tasks do |t|
      t.belongs_to :checklist, index: true
      t.string :name

      t.timestamps
    end
  end
end
