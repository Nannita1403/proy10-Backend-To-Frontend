const { getEvents, getEventbyID, getEventbyArtist, getEventbyAssistant, getEventbyLocation, getEventbyPrice, postEvent, updateEvent, deleteEvent, deleteAssistant } = require("../controllers/events");

const eventRouter = require("express").Router();

eventRouter.post("/", postEvent);
eventRouter.get("/", getEvents);
eventRouter.get("/:eventID", getEventbyID);
eventRouter.get("/price/:price", getEventbyPrice);
eventRouter.get("/:id", getEventbyAssistant);
eventRouter.get("/artist/:artist", getEventbyArtist);
eventRouter.get("/location/:location", getEventbyLocation);
eventRouter.put("/:eventID", updateEvent);
eventRouter.put("/:eventId/removeAssistant", deleteAssistant);
eventRouter.delete("/:id", deleteEvent);

module.exports = eventRouter;

