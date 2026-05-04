const express = require('express'); // Import the Express library
const router = express.Router(); // Create a new router object to define routes for the horoscope API

// Import the horoscopeService functions from the horoscopeClient.js file
const { horoscopeService } = require('../api/horoscopeClient'); 

// TODAY >>> Define a route TODAY's 
router.get('/today/:sign', async (req, res) => {
    const {sign} = req.params; // Get the zodiac sign from the URL parameters

    try {
        const result = await horoscopeService.getTodayHoroscope(sign);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// TOMORROW >>> Define a route TOMORROW's
router.get('/tomorrow/:sign', async (req, res) => {
    const {sign} = req.params; // Get the zodiac sign from the URL parameters

    try {
        const result = await horoscopeService.getTomorrowHoroscope(sign);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// MONTH >>> Define a route MONTHLY's
router.get('/monthly/:sign', async (req, res) => {
    const {sign} = req.params; // Get the zodiac sign from the URL parameters

    try {
        const result = await horoscopeService.getMonthlyHoroscope(sign);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router; // Export the router to be used in the main server file (index.js)

