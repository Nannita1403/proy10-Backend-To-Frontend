const { getArtists, getArtistbyID, postArtist, updateArtist, deleteArtist, getArtistbyNombre, getArtistByCategory } = require("../controllers/artists");

const artistRouter = require("express").Router();

artistRouter.get("/", getArtists);
artistRouter.get("/:id", getArtistbyID);
artistRouter.get("/nombre/:nombre", getArtistbyNombre);
artistRouter.get("/category/:category", getArtistByCategory);
artistRouter.post("/", postArtist);
artistRouter.put("/:id", updateArtist);
artistRouter.delete("/:id", deleteArtist);

module.exports = artistRouter;
