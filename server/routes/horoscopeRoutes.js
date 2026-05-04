const express = require('express'); // Import the Express library
const router = express.Router(); // Create a new router object to define routes for the horoscope API
const axios = require('axios'); // Import the Axios library for making HTTP requests

// Define a route for getting today's horoscope for a specific zodiac sign
router.get('/today/:sign', async (req, res) => {
    const sign = req.params.sign; // Get the zodiac sign from the URL parameters

    try {
        const response = await axios.post(
            `https://json.astrologyapi.com/v1/sun_sign_prediction/daily/${sign}`,
            { timezone: 0.0 },
            {
                headers: {
                    "Authorization": process.env.ASTRO_API_KEY,
                    "Content-Type": "application/json"
                }
            }
        );
        // Make a GET request to the Aztro API to get the horoscope for the specified sign
        res.json(response.data); // Send a JSON response with the horoscope message
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router; // Export the router to be used in the main server file (index.js)

