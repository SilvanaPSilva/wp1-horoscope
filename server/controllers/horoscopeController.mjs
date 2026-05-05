// Import the horoscopeService functions from the horoscopeClient.js file
import { horoscopeService } from '../api/horoscopeApiService.mjs';

// TODAY >>> Define a route TODAY's 
async function getToday(req, res) {

    const { sign } = req.params; // Get the zodiac sign from the URL parameters

    try {
        const result = await horoscopeService.getTodayHoroscope(sign);
        res.json(result);
    } catch (error) {
        res.status(500).json({
            error: error.response?.data || error.message
        });
    }
}

// TOMORROW >>> Define a route TOMORROW's
async function getTomorrow(req, res) {
    const { sign } = req.params; // Get the zodiac sign from the URL parameters

    try {
        const result = await horoscopeService.getTomorrowHoroscope(sign);
        res.json(result);
    } catch (error) {
        res.status(500).json({
            error: error.response?.data || error.message
        });
    }
}

// MONTH >>> Define a route MONTHLY's
async function getMonthly(req, res) {
    const { sign } = req.params; // Get the zodiac sign from the URL parameters

    try {
        const result = await horoscopeService.getMonthlyHoroscope(sign);
        res.json(result);
    } catch (error) {
        res.status(500).json({
            error: error.response?.data || error.message
        });
    }
}

// Export the controller functions to be used in the routes file
export { getToday, getTomorrow, getMonthly };

