const express = require('express'); // Import the Express library
const router = express.Router(); // Create a new router object to define routes for the horoscope API

// Import the horoscopeController to handle the logic for each route
const controller = require('../controllers/horoscopeController'); 

// Define routes for today's, tomorrow's, and monthly horoscope predictions
router.get('/today/:sign', controller.getToday);
router.get('/tomorrow/:sign', controller.getTomorrow);
router.get('/monthly/:sign', controller.getMonthly);

// Export the router to be used in the main server file (index.js)
module.exports = router; 

// The Horoscope routes was devide into two files: horoscopeRoutes.js and horoscopeController.js.
// The Routes file defines the endpoints
// The Controller file contains the logic for handling the requests and responses.
// This separation of concerns helps to keep the code organized and maintainable.