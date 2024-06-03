const mongoose = require("mongoose");

const artistSchema = new mongoose.Schema({
    nombre: {type: String, require: true },
    img: {type: String, require: true },
    category: {
        type:String, require: true, 
        enum: [
            "pop", 
            "rock", 
            "reggae", 
            "metal"
        ],
    },
     verified: {type:Boolean, require:true, default:false}
}, {
    timestamps: true,
    collection: "artists"
});

const Artist = mongoose.model("artists", artistSchema, "artists");
module.exports = Artist;
