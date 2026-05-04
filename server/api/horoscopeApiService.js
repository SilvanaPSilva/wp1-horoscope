const axios = require('axios');

// API Key - Access Token from .env file
const apiKey = process.env.ASTRO_API_KEY;
//console.log('API KEY:', apiKey);

// API URL
const apiUrl = 'https://json.astrologyapi.com/v1';

//const userId = process.env.ASTRO_USER_ID;
//const apiKey = process.env.ASTRO_API_KEY;

//const auth = Buffer.from(`${userId}:${apiKey}`).toString('base64');


// Endpoints
const endpointToday = '/sun_sign_prediction/daily/:zodiacName'; // Example endpoint for daily sun sign prediction
const endpointTomorrow = '/sun_sign_prediction/daily/next/:zodiacName'; // Example endpoint for tomorrow's prediction
const endpointMonth = '/horoscope_prediction/monthly/:zodiacName'; // Example endpoint for monthly horoscope prediction


// Function to call the Astrology API (https://json.astrologyapi.com/v1) + endpoint (sun_sign_prediction/daily,tomorrow, monthly) + zodiac sign
async function callAstrologyApi(endpoint, sign) {
  const finalUrl = apiUrl+endpoint.replace(':zodiacName', sign); // Replace ':zodiacName' with the actual zodiac sign
  //const headers = { Authorization: `Basic ${auth}`,'Content-Type': 'application/json'};
  const headers = { 'x-astrologyapi-key': apiKey,'Content-Type': 'application/json'};


  try{
    const response = await axios.post(finalUrl,{timezone: 0.0},{headers}); // Default timezone is 0.0 is Ireland
    
    return response.data;

    } catch (error) {
    console.error('Astrology API Error:', error.response?.data || error.message);
    throw error;
  }
}

//Functions
function getTodayHoroscope(sign) {
  return callAstrologyApi(endpointToday, sign);
}

function getTomorrowHoroscope(sign) {
  return callAstrologyApi(endpointTomorrow, sign);
}

function getMonthlyHoroscope(sign) {
  return callAstrologyApi(endpointMonth, sign);
}

module.exports = {horoscopeService:{ getTodayHoroscope, getTomorrowHoroscope, getMonthlyHoroscope
}};
