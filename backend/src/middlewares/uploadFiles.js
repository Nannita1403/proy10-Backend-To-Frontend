const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

const eventoStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'events',
    allowedFormats: ['jpg', 'png', 'jpeg', 'gif', 'webp']
  }
});

const perfilStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'profilePic',
    allowedFormats: ['jpg', 'png', 'jpeg', 'gif', 'webp']
  }
});


const uploadEvento = multer({storage: eventoStorage}).single("img");
const uploadPerfil = multer({storage: perfilStorage}).single("profilePic");

module.exports = {uploadEvento, uploadPerfil};