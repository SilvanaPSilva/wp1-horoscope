import express from 'express'; // Import the Express library
import { getToday, getTomorrow, getMonthly } from '../controllers/horoscopeController.mjs';

const router = express.Router();

// Define routes for today's, tomorrow's, and monthly horoscope predictions
router.get('/today/:sign', getToday);
router.get('/tomorrow/:sign', getTomorrow);
router.get('/monthly/:sign', getMonthly);

// Export the router to be used in the main server file (index.js)
export default router; 

// The Horoscope routes was devide into two files: horoscopeRoutes.js and horoscopeController.js.
// The Routes file defines the endpoints
// The Controller file contains the logic for handling the requests and responses.
// This separation of concerns helps to keep the code organized and maintainable.

//https://json.astrologyapi.com/v1/sun_sign_prediction/daily/:zodiacName
//https://json.astrologyapi.com/v1/sun_sign_prediction/daily/next/:zodiacName
//https://json.astrologyapi.com/v1/horoscope_prediction/monthly/:zodiacName