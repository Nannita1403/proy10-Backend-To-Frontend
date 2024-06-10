const mongoose = require("mongoose");

const artistSchema = new mongoose.Schema({
    name: {type: String, require: true },
    img: {type: String, require: false },
    description: {type: String, require: true },
    events: { type: mongoose.Types.ObjectId, ref: "events" }
}, {
    timestamps: true,
    collection: "artists"
});

const Artist = mongoose.model("artists", artistSchema, "artists");
module.exports = Artist;
