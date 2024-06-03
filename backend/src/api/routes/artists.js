const { isAdmin, isOrganizer } = require("../../middlewares/auth");
const { getArtists, getArtistbyID, postArtist, updateArtist, deleteArtist, getArtistbyNombre, getArtistByCategory } = require("../controllers/artists");

const artistRouter = require("express").Router();

artistRouter.get("/", getArtists);
artistRouter.get("/:id", getArtistbyID);
artistRouter.get("/nombre/:nombre", getArtistbyNombre);
artistRouter.get("/category/:category", getArtistByCategory);
artistRouter.post("/", isOrganizer, isAdmin, postArtist);
artistRouter.put("/:id", isOrganizer, isAdmin, updateArtist);
artistRouter.delete("/:id",isAdmin, deleteArtist);

module.exports = artistRouter;
