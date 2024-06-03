const artistRouter = require("./artists");
const eventRouter = require("./events");
const userRouter = require("./user");

const mainRouter = require ("express").Router();

mainRouter.use("/user", userRouter);
mainRouter.use("/event", eventRouter);
mainRouter.use("/artist", artistRouter);

module.exports =mainRouter;