class AddProfileImgToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :profile_img, :string
    add_column :users, :bio, :text
  end
end
