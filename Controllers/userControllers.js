import firebase  from '../db.js';
import WeatherData  from '../Models/WeatherData.js';
const firestore = firebase.firestore();


//POST Operation
const addWeatherData = async (req, res, next) => {
    try {
        console.log(req.body);
        const reqData = req.body;
        await firestore.collection('userDatas').doc().set(reqData);
        return res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}
 

// const getCurrentData = async (req,res) => {
//     try {
//         const currentData = await firestore.collection('config').doc(currentWeather).get(reqData);
//         console.log(currentData);
//         return currentData;
//     } catch (error) {
//         console.log(error.message);
//     }
// }


// const getForecastData = async (req,res) => {
//     try {
//         const forecastData = await firestore.collection('config').doc(forecastWeather).get(reqData);
//         console.log(forecastData);
//         return forecastData;
//     } catch (error) {
//         console.log(error.message);
//     }
// }

//GET Operation For Complete Collection
const getweatherData = async (req, res, next) => {
    try {
        const weathearRef = firestore.collection('userDatas');
        const dataObj = await weathearRef.get();
        const userDatasArray = [];
        if(!dataObj.empty) {
            dataObj.forEach(doc => {
                const weatherData = new WeatherData(
                    doc.id,
                    doc.data().name,
                    doc.data().region,
                    doc.data().country,
                    doc.data().lat,
                    doc.data().lon,
                    doc.data().tzidD,
                    doc.data().time
                );
                userDatasArray.push(weatherData);
            });
            res.send(userDatasArray);
        }else {
            res.status(404).send('No userDatas record found');
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}



// const getweatherData = async (req, res, next) => {
//     try {
//         const id = req.params.id;
//         const iotData = firestore.collection('userDatas').doc(id);
//         const data = await iotData.get();
//         if(!data.exists) {
//             res.status(404).send('iotData with the given ID not found');
//         }else {
//             res.send(data.data());
//         }
//     } catch (error) {
//         res.status(400).send(error.message);
//     }
// }


// //DELETE Operation 
// const deleteUserData = async (req, res, next) => {
//     try {
//         const id = req.params.id;
//         await firestore.collection('userDatas').doc(id).delete();
//         res.send('Record deleted successfuly');
//     } catch (error) {
//         res.status(400).send(error.message);
//     }
// }

export {
    addWeatherData,
    getweatherData,
    // Mapping
    // deleteUserData
}