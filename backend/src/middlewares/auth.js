const User = require("../api/models/user");
const { verificarLlave } = require("../utils/jwt");

const isAuth = async (req,res,next) => {
    try { 
        const token = req.headers.authorization.replace("Bearer ", "");
        const {id} = verificarLlave(token);

        const user = await User.findById(id)/*.populate("events")*/
        user.password = null;
        req.user = user;
        next();
    } catch (error) {
        return res.status(400).json("No estas autorizado para esta acción");
    }
};

const isAdmin = async (req,res,next) =>{
    if(user.role === "admin") {
        next();
    } else {
        return res.status(400).json("No eres Admin")
    }
};

const isOrganizer = async (req,res,next) =>{
try {
    req.user.isOrganizer = false;
    const eventId = req.params.id;
    const event = await Event.findById(eventId).populate("organizer");
    const organizerId = event.organizer.id;
    if (req.user.id === organizerId){
        req.user.isOrganizer = true;
        }
    next();
} catch (error) {
    next(error);}
};

module.exports ={isAuth, isAdmin, isOrganizer};