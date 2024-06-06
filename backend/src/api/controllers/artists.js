const Artist = require("../models/artists");
const Event = require("../models/events");

const postArtist = async (req,res,next) => {
    try {
        const existingArtist = await Artist.findOne({
            name: req.body.nombre,
          });
          if (existingArtist) {
            return res.status(400).json(`${existingArtist.nombre} ya está en la BBDD.`);
          }
          const newArtist = new Artist(req.body);
          if (req.files) {
            req.files.forEach ( file => {
                newArtist.img.push(file.path);
            });
          }
          const savedArtist = await newArtist.save();
          return res.status(200).json(savedArtist);
    } catch (error) {
        return res.status(400).json("error");
    }
};

const getArtists = async (req,res,next) => {
    try {
        const allArtists = await Artist.find();
        return res.status(200).json(allArtists);
    } catch (error) {
        return res.status(400).json("Error en la busqueda de Artistas");
    }
};

const getArtistbyID = async (req,res,next) => {
    try {
        const {artistID} = req.params;
        const artist = await Artist.findById(artistID);
        return res.status(200).json(artist);
    } catch (error) {
        return res.status(400).json("Error en la busqueda por ID");
    }
};

const getArtistbyNombre = async (req,res,next) => {
    try {
        const { name } = req.params;
        const artistByName = await Artist.findOne({name});
        artistByName
        ? res.status(200).json(artistByName)
        : res.status(404).json("Artista no encontrado");
    } catch (error) {
        return res.status(400).json("Error en la busqueda por Nombre");
    }
};

const updateArtist = async (req,res,next) => {
    try {
        const {id} = req.params;
        const existingArtist = await Artist.findById(id); 
        if(!existingArtist) {
        return res.status(404).json("Artista no encontrado"); }
        
        const newArtist = new Artist (req.body);
        newArtist._id = id;
        if (req.files) {
            for (const img of req.files) {
                newArtist.img.push(img.path);
            }
        };
    newArtist.img = [...existingArtist.img, ...newArtist.img];
    
    const updateArtist = await Artist.findByIdAndUpdate(id, newArtist, {new:true});
    return res.status(200).json({message:"Artista actualizado", event: updateArtist});
    } catch (error) {
        return res.status(400).json("Error en el Update del Artista");
    }
};

const deleteArtist = async (req,res,next) => {
    try {
        const {id} = req.params;
        const artistDeleted = await Artist.findByIdAndDelete(id);
        artistDeleted.img.forEach((url)=>{
            deleteFromCloudinary(url);
        });
        
        return res.status(200).json({message:"Artista Eliminado", event: artistDeleted});
    } catch (error) {
        return res.status(400).json("error en la eliminación del Juego");
    }
};

module.exports = {
    getArtists, getArtistbyID, getArtistbyNombre, postArtist, updateArtist, deleteArtist
}