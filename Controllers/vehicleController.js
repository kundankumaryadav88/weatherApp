import  firebase from '../db.js';
import  VehicleData from '../models/VehicleData.js';
const firestore = firebase.firestore();

//POST Operation
const addVehicleData = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('VehicleDatas').doc().set(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}
 

//GET Operation For Complete Collection
const getAllVehicleData = async (req, res, next) => {
    try {
        const VehicleDatas = await firestore.collection('VehicleDatas');
        const data = await VehicleDatas.get();
        const VehicleDatasArray = [];
        if(data.empty) {
            res.status(404).send('No VehicleDatas record found');
        }else {
            data.forEach(doc => {
                const vehicleData = new VehicleData(
                    doc.id,
                    doc.data().make,
                    doc.data().year,
                    doc.data().chassis,
                    doc.data().ownerid,
                );
                VehicleDatasArray.push(vehicleData);
            });
            res.send(VehicleDatasArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}


//GET Operation For Each Collection
const getVehicleData = async (req, res, next) => {
    try {
        const id = req.params.id;
        const VehicleData = await firestore.collection('VehicleDatas').doc(id);
        const data = await VehicleData.get();
        if(!data.exists) {
            res.status(404).send('VehicleDatas with the given ID not found');
        }else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}


//PUT Operation For Each Collection
const updateVehicleData= async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const VehicleData =  await firestore.collection('VehicleDatas').doc(id);
        await VehicleData.update(data);
        res.send('iotData record updated successfuly');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}


//DELETE Operation 
const deleteVehicleData = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('VehicleDatas').doc(id).delete();
        res.send('Record deleted successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

export {
    addVehicleData,
    getAllVehicleData,
    getVehicleData,
    updateVehicleData,
    deleteVehicleData
}