const { isOrganizer } = require("../../middlewares/auth");
const deleteFromCloudinary = require("../../utils/deleteFiles");
const Event = require("../models/events");

const postEvent = async (req,res,next) => {
    try {
        const existingEvent = await Event.findOne({
            name: req.body.name
          });
          if (existingEvent) {
            return res
              .status(400)
              .json(`${existingEvent.name} ya está en la base de datos.`);
          }
          //Primero veo que no este duplicado, sino:
            const newEvent = new Event(req.body);
            if (req.files) {
                req.files.forEach(file => {
                  newEvent.img.push(file.path);
                });
              } 
            //La persona que crea el evento queda registrada como organizador.
            newEvent.organizer = req.user.id;
            const savedEvent = await newEvent.save();
            const populatedEvent = await Event.findById(savedEvent.id).populate("artists");
            return res.status(201).json({ message:"Evento creado correctamente", event: populatedEvent });          
    } catch (error) {
        return res.status(400).json(console.log(error));
    }
};
const getEvents = async (req,res,next) => {
    try {
        const allEvents = await Event.find()//.populate("artists");
        return res.status(200).json(allEvents);
    } catch (error) {
        return res.status(400).json("error");
    }
};
const getEventbyID = async (req,res,next) => {
    try {
        const {id} =req.params;
        const event = await Event.findById(id).populate("artists", "users");
        return res.status(200).json(event);
    } catch (error) {
        return res.status(400).json("error en la busqueda por Id");
    }
};
const getEventbyPrice = async (req,res,next) => {
    try {
        const { precio } = req.params;
        const requestEvents = await Event.find({ price: {$lte:precio}});
        requestEvents.length 
        ? res.status(200).json(requestEvents)
        : res.status(204).json("No hay eventos que coincidan con tu Buúsqueda");
    } catch (error) {
        return res.status(400).json("Error en la busqueda por Precio");
    }
};
const getEventbyAssistant = async (req,res,next) => {
    try {
        const userId= req.params.id;
        const eventAssistant = await Event.find({assistants:userId}).populate("assistants","artists");
        return res.status(200).json(eventAssistant);
     } catch (error) {
        return res.status(400).json("Error en la carga por Assistants");
     }
};
const getEventbyArtist = async (req,res,next) => {
    try {
        const {artist}= req.params;
        const eventArtist = await Event.findOne({artist:artist});
        return res.status(200).json(eventArtist);
     } catch (error) {
        return res.status(400).json("Error en la busqueda por Artista");
     }
};
const getEventByCategory = async (req,res,next) => {
  try {
      const {category}= req.params;
      const eventByCategory = await Event.find({category:category});
      eventByCategory
      ? res.status(200).json(eventByCategory)
      : res.status(404).json("Categoria no encontrada");
   } catch (error) {
      return res.status(400).json("Error en la busqueda por Categoria");
   }
};
const getEventbyLocation = async (req,res,next) => {
    try {
        const {location}= req.params;
        const eventsLocation = await Event.find({location:location});
        return res.status(200).json(eventsLocation);
     } catch (error) {
        return res.status(400).json("Error en la busqueda por Location");
     }
};
const updateEvent = async (req,res,next) => {
        try {
          const { id } = req.params;
          const newEvent = new Event (req.body);
          const oldEvent = await Event.findById(id);
          if(!oldEvent){
            return res.status(404).json("Evento no encontrado");
          }
          newEvent._id = id;

          newEvent.assistants= [...oldEvent.assistants, ...newEvent.assistants];

          if (req.file) {
            newEvent.img = req.file.path;
            if(oldEvent.img){
                deleteFromCloudinary(oldEvent.img)
            }
           };

           if(!isOrganizer) {
            newEvent.organizer = oldEvent.organizer;
           }
    
          const eventUpdate = await Event.findByIdAndUpdate(id, newEvent, {
            new: true,
          }.populate("artists","users", "organizer"));
          return res.status(200).json({mensaje:"Evento Actualizado", event:eventUpdate});
        } catch (error) {
          return res.status(400).json(error);
        }
      };
const deleteAssistant = async (req,res,next) => {
    try {
        const { id } = req.params;
        const event = await Event.findById(id);
        const newAssistantList = event.assistants.slice();
        newAssistantList.splice(event.assistants.indexOf(req.user._id), 1);
        console.log('lista nueva:', newAssistantList);
        console.log('lista vieja', event.assistants);
        const updatedEvent = await Event.findByIdAndUpdate(
          id,
          { assistants: newAssistantList },
          { new: true }
        );
        return res
          .status(200).json({ message: 'Evento actualizado correctamente', event:updatedEvent });
      } catch (error) {
        next(error);
      }
    };
const deleteEvent = async (req,res,next) => {
    try {
        if (req.user.isAdmin || req.user.isOrganizer) {
        const { id } = req.params;
        const deletedEvent = await Event.findByIdAndDelete(id);
        deletedEvent.img.forEach((url)=>{
            deleteFromCloudinary(url);
        });
        if(deletedEvent) {
            return res.status(200).json({message:"Evento Eliminado", event: deletedEvent});
        } else {
            deletedEvent 
            ? res.status(404).json("Evento no encontrado")
            : res.status(401).json("Necesitas autorización para realizar esta acción.");
        }}
      } catch (error) {
        return res.status(400).json("error")}
    };

    module.exports = { postEvent, getEvents, getEventbyID, getEventbyArtist, getEventbyPrice, getEventbyAssistant, getEventbyLocation, getEventByCategory, updateEvent, deleteAssistant, deleteEvent }
