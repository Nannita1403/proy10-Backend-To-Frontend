const { isAdmin, isAuth } = require("../../middlewares/auth");
const { getUsers, getUserbyID, register, updateUser, login, deleteUser } = require("../controllers/user");

const userRouter = require("express").Router();

userRouter.get("/",isAdmin, getUsers);
userRouter.get("/:id",isAdmin, getUserbyID);
userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.put("/:id",isAdmin,isAuth, updateUser);
userRouter.delete("/:id",isAdmin,isAuth, deleteUser)


module.exports = userRouter;
