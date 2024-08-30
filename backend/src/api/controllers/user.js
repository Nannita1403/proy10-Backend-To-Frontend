const User = require("../models/user");
const bcrypt = require("bcrypt");
const { generarLlave } = require("../../utils/jwt");


const getUsers = async (req,res,next) => {
    try {
        const users = await User.find();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(400).json("Error al recolectar los Usuarios");
    }
};
const getUserbyID = async (req,res,next) => {
    try {
        const {id} =req.params;
        const user= await User.findById(id);
        return res.status(200).json(user);
    } catch (error) {
        return res.status(400).json(`Error al encontar tu User: ${id}`);
    }
};
const register = async (req,res,next) => {
     try {
        const newUser = new User({
            username : req.body.username,
            email: req.body.email,
            password: req.body.password,
        });
        newUser.role = "user";

        const emailDuplicated = await User.findOne({ email: req.body.email });
        if (emailDuplicated) {
          return res.status(400).json("Usuario ya existente con ese email");
        }
        const nameDuplicated = await User.findOne({ email: req.body.username });
        if (nameDuplicated) {
          return res.status(400).json("Usuario ya existente");
        }

        const savedUser = await newUser.save();
        return res.status(201).json(savedUser);
    } catch (error) {
        return res.status(400).json("Error en la creación de tu User");
    }
};
const login = async (req,res,next) => {
    try {
        const user = await User.findOne({username: req.body.username});
        if (!user) {
            return res.status(400).json("Usuario o contraseña incorrectos");
        } 
       if (bcrypt.compareSync(req.body.password, user.password)) {
                const token = generarLlave(user._id);
                return res.status(200).json({ user, token });
        }else{
       return res.status(400).json("Usuario o contraseña incorrectos");
    }

    } catch (error) {
        return res.status(400).json("Error en el Login");
    }
};

const updateUser = async (req,res,next) => {
    try {
        const { id } = req.params;
        const newUser = new User(req.body);

        newUser.role = "user";
        if (req.user.role === "admin") {
            newUser.role = req.body.role;
        }

        const oldUser = await User.findById(id);
        newUser._id = id;
        newUser.events = [...oldUser.events, ...newUser.events];
        
        const user = await User.findByIdAndUpdate(id, newUser, { new: true });
        return res.status(200).json(user);
    } catch (error) {
        return res.status(400).json("error en el update del User");
    }
};

const deleteUser = async (req,res,next) => {
    try {
        const {id} = req.params;
        if (req.user.id === id || req.user.role === "admin") {
        const userDeleted = await User.findByIdAndDelete(id);
        userDeleted.profilePic.forEach((url)=>{
            deleteFromCloudinary(url);
        });
        
        return res.status(200).json({message:"User Eliminado", event: userDeleted});
    } else {
        return res.status(401).json("No estas autorizado para esta acción")
    }
    } catch (error) {
        return res.status(400).json("error en la eliminación del Juego");
    }
};


module.exports = {
    getUsers, getUserbyID, register, updateUser, login, deleteUser }