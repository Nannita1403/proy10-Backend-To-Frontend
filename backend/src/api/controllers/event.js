const Event = require("../models/event");

const postEvent = async (req,res,next) => {
    try {
            //Primero veo que no este duplicado.
            const newEvent = new Event(req.body);
            //La persona que crea el evento queda registrada como organizador.
            
            newEvent.organizer = req.user._id;
            const savedEvent = await newEvent.save();
            const populatedEvent = await Event.findById(savedEvent._id).populate("artist");
            return res.status(201).json({ message:"Evento creado correctamente", event: populatedEvent });          
    } catch (error) {
        return res.status(400).json(console.log(error));
    }
};

const getEvents = async (req,res,next) => {
    try {
        const events = await Event.find().populate("artist");
        return res.status(200).json(events);
    } catch (error) {
        return res.status(400).json("error");
    }
};

const getEventbyID = async (req,res,next) => {
    try {
        const {id} =req.params;
        const event = await Event.findById(id).populate("artist");
        return res.status(200).json(event);
    } catch (error) {
        return res.status(400).json("error en la busqueda por Id");
    }
};

const getEventbyPrice = async (req,res,next) => {
    try {
        
    } catch (error) {
        return res.status(400).json("error");
    }
};
const getEventbyAssistant = async (req,res,next) => {
    try {
        
    } catch (error) {
        return res.status(400).json("error");
    }
};

const getEventbyArtist = async (req,res,next) => {
    try {
        
    } catch (error) {
        return res.status(400).json("error");
    }
};

const getEventbyLocation = async (req,res,next) => {
    try {
        
    } catch (error) {
        return res.status(400).json("error");
    }
};

const updateEvent = async (req,res,next) => {
    try {
        
    } catch (error) {
        return res.status(400).json("error");
    }
};

const deleteAssistant = async (req,res,next) => {
    try {
        
    } catch (error) {
        return res.status(400).json("error");
    }
};

const deleteEvent = async (req,res,next) => {
    try {
        
    } catch (error) {
        return res.status(400).json("error");
    }
};


module.exports = {
    postEvent, getEvents, getEventbyID, getEventbyArtist, getEventbyPrice, getEventbyAssistant, getEventbyLocation,  updateEvent, deleteAssistant, deleteEvent }