const User = require("../api/models/user");
const { verificarLlave } = require("../utils/jwt");

const isAuth = async (req,res,next) => {
    try { 
        const token = req.headers.authorization;
        if (!token) {
            return res.status(404).json('Unauthorized');
          }

        const parseToken = token.replace("Beare ", "");
        const {id} = verificarLlave(parseToken);

        const user = await User.findById(id);
        user.password = null;
        req.user = user;
        next();
    } catch (error) {
        return res.status(400).json("No estas autorizado para esta acción");
    }
};

const isAdmin = async (req,res,next) =>{
try {
    const token = req.headers.authorization;
    const parseToken = token.replace("Beare ", "");
    
    const {id} = verificarLlave(parseToken);
    const user = await User.findById(id);

    if(user.role === "admin") {
        user.password = null;
        req.user = user;
        next();
    } else {
        return res.status(400).json("No eres Admin")
    }
} catch (error) {
    return res.status(400).json("No estás autorizado");
}
}

/*const isOrganizer = async (req,res,next) =>{
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
};*/

module.exports ={isAuth, isAdmin};