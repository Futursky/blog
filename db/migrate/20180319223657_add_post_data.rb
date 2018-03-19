class AddPostData < ActiveRecord::Migration[5.1]
  def up
    Post.create([{ name: 'Star Wars', body: "some body text" },
               { name: 'Lord of the Rings', body: "some body text" }])
  end

  def down
    Post.destroy_all
  end
end
