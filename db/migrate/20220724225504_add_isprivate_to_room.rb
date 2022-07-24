class AddIsprivateToRoom < ActiveRecord::Migration[6.1]
  def change
    add_column :rooms, :is_private, :boolean, :defalt => false
  end
end
