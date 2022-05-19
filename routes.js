import express from "express";

//Importing All Operation To Specific Path

import {
  addWeatherData,
  getweatherData, 
  // getUserData, 
  // updateUserData, 
  // deleteUserData
} from "./Controllers/userControllers.js"; // Importing User Controller
import {
  addVehicleData, 
  getAllVehicleData, 
  getVehicleData, 
  updateVehicleData, 
  deleteVehicleData
} from "./Controllers/vehicleController.js"; //Importing Vehicle Controller

const router = express.Router();


//-------------------------------------User-Routes----------------------------------

router.post('/user/postData', addWeatherData);
router.get('/user/getData', getweatherData);
// router.get('/user/getData/:id', getweatherData);
// router.put('/user/putData', updateUserData);
// router.patch('/user/patchData', updateUserData);
// router.delete('/user/deleteData', deleteUserData);

//-------------------------------------User-Routes----------------------------------


//-------------------------------------Vehicle-Routes----------------------------------

router.post('/vehicle/postData', addVehicleData);
router.get('/vehicle/getData', getAllVehicleData);
router.get('/vehicle/getData/:id', getVehicleData);
router.put('/vehicle/putData', updateVehicleData);
router.patch('/vehicle/patchData', updateVehicleData);
router.delete('/vehicle/deleteData', deleteVehicleData);

//-------------------------------------Vehicle-Routes----------------------------------

const routes = router;
export default routes;