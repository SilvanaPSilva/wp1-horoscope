require('dotenv').config();

const express = require('express');
const app = express(); // Create an instance of the Express application

// Import the horoscope routes from the horoscopeRoutes.js file
const horoscopeRoutes = require('./routes/horoscopeRoutes');

//Use routes defined in horoscopeRoutes.js for any requests to /api/horoscope
app.use('/horoscope', horoscopeRoutes);


// Tester if the server(3000) is running 
app.get('/', (req, res) => {
    res.send('Hello, World - Express server running!!');
})

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
});