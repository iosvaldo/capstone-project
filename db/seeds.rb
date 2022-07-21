puts "🙎🏼‍♂️ Seeding Users..."
adam  = User.create!({ username: "Adam",  password: "123" })
beddy = User.create!({ username: "Beddy", password: "321" })
champ = User.create!({ username: "Champ", password: "555" })

puts "🚪 Seeding Rooms..."
front = Room.create({ name: "Front-end Dev", description: "Front-end development for the pragmatic developers" })
back = Room.create({ name: "Back-end Dev",  description: "Behind every great website and mobile application is a successful “back-end developer" })
gen  = Room.create({ name: "General",       description: "Discuss a variety of different topics and subjects about software development" })

puts "📩 Seeding Messages..."
Message.create({  user_id: adam.id,   room_id: front.id,  body: "My interests are in Front End Engineering" })
Message.create({  user_id: beddy.id,  room_id: gen.id,    body: "How much does a software enginner make ?" })
Message.create({  user_id: champ.id,  room_id: back.id,   body: "I love programming 💜 " })
Message.create({  user_id: adam.id,   room_id: front.id,  body: "🙌" })

puts "🚹 Seeding User Rooms..."
UserRoom.create({ user_id: adam.id,   room_id:  gen.id})
UserRoom.create({ user_id: champ.id,  room_id: back.id})
UserRoom.create({ user_id: beddy.id,  room_id: front.id})
UserRoom.create({ user_id: beddy.id,  room_id: gen.id})
UserRoom.create({ user_id: adam.id,   room_id: gen.id})
UserRoom.create({ user_id: beddy.id,  room_id: front.id})

puts "✅✅✅✅ All Seeding Completed..."


