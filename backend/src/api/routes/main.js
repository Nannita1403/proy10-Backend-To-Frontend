const artistRouter = require("./artists");
const eventRouter = require("./events");
const userRouter = require("./user");

const mainRouter = require ("express").Router();

mainRouter.use("/users", userRouter);
mainRouter.use("/events", eventRouter);
mainRouter.use("/artists", artistRouter);

module.exports =mainRouter;