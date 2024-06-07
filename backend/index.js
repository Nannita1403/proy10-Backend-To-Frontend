require("dotenv").config();
const express = require ("express");
const { connectDB } = require("./src/config/db");
const mainRouter = require("./src/api/routes/main");
const cors = require("cors");

const app = express();

connectDB();

app.use(cors());

app.use(express.json());    

app.use("/api/v1", mainRouter);
app.use("*", (req,res,next)=> {
    return res.status(400).json("Route not found");
})

app.listen(3000, ()=> {
    console.log("http://localhost:3000");
})