const { getUsers, getUserbyID, register, updateUser, login, deleteUser } = require("../controllers/user");

const userRouter = require("express").Router();

userRouter.get("/", getUsers);
userRouter.get("/:id", getUserbyID);
userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser)


module.exports = userRouter;
