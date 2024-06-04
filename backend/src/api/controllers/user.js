const User = require("../models/user");
const bcrypt = require("bcrypt");
const { generarLlave } = require("../../utils/jwt");


const getUsers = async (req,res,next) => {
    try {
        const users = await User.find();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(400).json("error en la recoleccion de Usuarios");
    }
};
const getUserbyID = async (req,res,next) => {
    try {
        const {id} =req.params;
        const user= await User.findById(id);
        return res.status(200).json(user);
    } catch (error) {
        return res.status(400).json("error en encontar el User");
    }
};
const register = async (req,res,next) => {
    try {
        const userDuplicated = await User.findOne({ userName: req.body.userName });
        if (userDuplicated) {
          return res.status(400).json("Usuario ya existente");
        }
        const emailDuplicated = await User.findOne({ email: req.body.email });
        if (emailDuplicated) {
          return res.status(400).json("Usuario ya existente cone se correo");
        }
        
        const newUser = new User({
            userName: req.body.userName,
            password: req.body.password,
            email:req.body.email,
            rol: "user"
        });
        
        const savedUser = await newUser.save();
        return res.status(201).json(savedUser);
    } catch (error) {
        return res.status(400).json("Error en la creación del User");
    }
};

const login = async (req,res,next) => {
    try {
        const { userName, password } = req.body;
        const user = await User.findOne({userName});
        if (!user) {
            return res.status(400).json("Usuario o contraseña incorrectos");
        }
    
        if (bcrypt.compareSync(password, user.password)) {
            const token = generarLlave(user._id);
            return res.status(200).json({ token, user })
        } else{
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

        newUser.rol = "user";
        if (req.user.rol === "admin") {
            newUser.rol = req.body.rol;
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
        const userDeleted = await User.findByIdAndDelete(id);
        userDeleted.profilePic.forEach((url)=>{
            deleteFromCloudinary(url);
        });
        
        return res.status(200).json({message:"User Eliminado", event: userDeleted});
    } catch (error) {
        return res.status(400).json("error en la eliminación del Juego");
    }
};


module.exports = {
    getUsers, getUserbyID, register, updateUser, login, deleteUser }