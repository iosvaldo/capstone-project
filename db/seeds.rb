
puts "🚪 Seeding Rooms..."
room1=Room.create!(room_name: "Front End", room_body: "Front-end development for the pragmatic developers #Front-end-development 👩🏼‍💻")
room2=Room.create!(room_name:"Back End",room_body: "Behind every great website and mobile application is a successful “back-end developer 💜")
room3=Room.create!(room_name:"Debugging",room_body:"Debugging tactics can involve interactive debugging, control flow analysis, and so much more 🛠")
room4=Room.create!(room_name:"General", room_body:"Discuss a variety of different topics and subjects about software development 🙌")


puts "💬 Seeding ChatRooms..."
chatroom1=Chatroom.create!(room_name:"Front End")
chatroom2=Chatroom.create!(room_name:"Back End")
chatroom3=Chatroom.create!(room_name:"Debugging")
chatroom4=Chatroom.create!(room_name:"General")

puts "👥 Seeding Users..."
user1=User.create!(name:"Adam",username:"Adam",password:"123",password_confirmation:"123",has_agreed: true, profile_img:"https://i.ibb.co/DVz8Xpt/hacker3.png",bio:"My name is Adam, and perfect coding skills can be able to create software that can work with perfection.⭐️")
user2=User.create!(name:"Beddy",username:"Beddy",password:"123",password_confirmation:"123",has_agreed: true,profile_img:"https://i.ibb.co/JdNDmCQ/hacker-3.png",bio:"We are the ones who can help the computers to take right decisions by creating incredible software.🎤")



puts "✅✅✅✅ All Seeding Completed..."
