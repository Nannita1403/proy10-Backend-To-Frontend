const { isAdmin, isAuth } = require("../../middlewares/auth");
const { getEvents, getEventbyID, getEventbyArtist, getEventbyAssistant, getEventbyLocation, getEventbyPrice, postEvent, updateEvent, deleteEvent, deleteAssistant, getEventByCategory } = require("../controllers/events");

const eventRouter = require("express").Router();

eventRouter.post("/",isAuth, isAdmin, postEvent);
eventRouter.get("/", getEvents);
eventRouter.get("/:id", getEventbyID);
eventRouter.get("/price/:price", getEventbyPrice);
eventRouter.get("/:assistants",isAdmin, getEventbyAssistant);
eventRouter.get("/artist/:artist", getEventbyArtist);
eventRouter.get("/category/:category", getEventByCategory);
eventRouter.get("/location/:location", getEventbyLocation);
eventRouter.put("/:id",isAdmin, updateEvent);
eventRouter.put("/:id/removeAssistant", isAdmin, deleteAssistant);
eventRouter.delete("/:id",isAdmin, deleteEvent);

module.exports = eventRouter;

