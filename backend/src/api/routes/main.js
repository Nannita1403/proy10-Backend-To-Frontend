const artistRouter = require("./artist");
const eventRouter = require("./event");
const userRouter = require("./user");

const mainRouter = require ("express").Router();

mainRouter.use("/user", userRouter);
mainRouter.use("/event", eventRouter);
mainRouter.use("/artist", artistRouter);

module.exports =mainRouter;