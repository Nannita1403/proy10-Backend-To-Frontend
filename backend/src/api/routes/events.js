const { isAdmin, isOrganizer, isAuth } = require("../../middlewares/auth");
const { getEvents, getEventbyID, getEventbyArtist, getEventbyAssistant, getEventbyLocation, getEventbyPrice, postEvent, updateEvent, deleteEvent, deleteAssistant, getEventByCategory } = require("../controllers/events");

const eventRouter = require("express").Router();

eventRouter.post("/",isOrganizer, isAdmin, postEvent);
eventRouter.get("/", getEvents);
eventRouter.get("/:id", getEventbyID);
eventRouter.get("/price/:price", getEventbyPrice);
eventRouter.get("/:assistants",isAdmin, isOrganizer, getEventbyAssistant);
eventRouter.get("/artist/:artist", getEventbyArtist);
eventRouter.get("/category/:category", getEventByCategory);
eventRouter.get("/location/:location", getEventbyLocation);
eventRouter.put("/:id",/*isAdmin,isOrganizer,*/ updateEvent);
eventRouter.put("/:id/removeAssistant",isOrganizer, isAdmin, deleteAssistant);
eventRouter.delete("/:id",isAdmin, isOrganizer, deleteEvent);

module.exports = eventRouter;

