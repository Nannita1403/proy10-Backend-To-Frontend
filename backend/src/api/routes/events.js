const { isAdmin, isOrganizer, isAuth } = require("../../middlewares/auth");
const { getEvents, getEventbyID, getEventbyArtist, getEventbyAssistant, getEventbyLocation, getEventbyPrice, postEvent, updateEvent, deleteEvent, deleteAssistant } = require("../controllers/events");

const eventRouter = require("express").Router();

eventRouter.post("/",(isOrganizer, isAdmin), postEvent);
eventRouter.get("/", getEvents);
eventRouter.get("/:eventID",(isAuth), getEventbyID);
eventRouter.get("/price/:price",(isAuth), getEventbyPrice);
eventRouter.get("/:id",(isAdmin, isOrganizer), getEventbyAssistant);
eventRouter.get("/artist/:artist", getEventbyArtist);
eventRouter.get("/location/:location", getEventbyLocation);
eventRouter.put("/:eventId",(isOrganizer, isAdmin), updateEvent);
eventRouter.put("/:eventId/removeAssistant",(isOrganizer, isAdmin), deleteAssistant);
eventRouter.delete("/:id",(isAdmin, isOrganizer), deleteEvent);

module.exports = eventRouter;

