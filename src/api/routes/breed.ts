const breedRoute = require('express').Router();
const { breedController } = require('../controllers');
import middlewares from "./../middlewares"


breedRoute.get('/breeds', breedController.getBreeds);
breedRoute.get('/breeds/:id', breedController.getBreedInfo);
breedRoute.post('/insertbreed', breedController.insertBreed);
breedRoute.post('/addUserBreed', breedController.addBreedFromUser);
breedRoute.post('/detect', middlewares.imageUploadMiddleware.uploadToFilesystem.single('image'), breedController.detectBreed);


module.exports = breedRoute;