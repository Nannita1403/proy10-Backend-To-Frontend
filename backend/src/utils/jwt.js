const jwt = require("jsonwebtoken");

const generarLlave = (id) => 
 jwt.sign({ id }, process.env.SECRET_KEY, { expiresIn: "1y" });


const verificarLlave = (token) => 
     jwt.verify(token, process.env.SECRET_KEY);


module.exports = { generarLlave, verificarLlave };
