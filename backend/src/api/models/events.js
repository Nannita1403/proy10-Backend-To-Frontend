const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true, required: true },
    date: { type: Date, require: true },
    location: { type: String, trim: true },
    price: {type: Number, require: true },
    description: { type: String, trim: false },
    img: { type: String, trim: true },
    assistants: [{ type: mongoose.Types.ObjectId, ref:"users"}],
    artist: { type: mongoose.Types.ObjectId, ref: "artists" },
    organizer: { type: mongoose.Types.ObjectId, ref: "users" , require: false},
    category: {
      type:String, require: true, 
      enum: [ "Pop", "Rock", "Indie", "Electronica", "Reggae", "Metal", "Mix"]
        }
  },
  {
    timestamps: true,
    collection: 'events',
  }
);

const Event = mongoose.model("events", eventSchema, "events");
module.exports = Event;
