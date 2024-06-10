require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../../api/models/user');
const Event = require('../../api/models/events');
const Artist = require('../../api/models/artists');
const springEvents = require('./eventSeed');
const registeredUsers = require('./userSeed');
const artistEvents = require('./artistSeed');

const eventDocument = springEvents.map((event) => new Event(event));
const artistDocument = artistEvents.map((event) => new Event(event));
const userDocument = registeredUsers.map((user) => {
  const hashedPassword = bcrypt.hashSync(user.password, 10);
  return { ...user, password: hashedPassword };
});

async function seedBBDD() {
  try {
    await mongoose.connect(process.env.DB_URL);

    await User.deleteMany();
    await User.insertMany(userDocument);
    console.log('Users inserted');

    await Artist.deleteMany();
    await Artist.insertMany(artistDocument);
    console.log('Artists inserted');

    await Event.deleteMany();
    await Event.insertMany(eventDocument);
    console.log('Events inserted');

  } catch (error) {
    console.error('Error seeding database: ', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from database');
  }
}

seedBBDD();