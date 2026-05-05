import 'dotenv/config';
import express from 'express';
import cors from 'cors'; // Import the CORS middleware to enable Cross-Origin Resource Sharing

import horoscopeRoutes from './routes/horoscopeRoutes.mjs';
import memberRoutes from './routes/memberRoutes.mjs';


// Create an instance of the Express application
const app = express(); 

// Middlewares
app.use(cors());
app.use(express.json());

//Routes
app.use('/horoscope', horoscopeRoutes);
app.use('/members', memberRoutes);

// Tester if the server(3000) is running 
app.get('/', (req, res) => {
    res.send('Hello, World - Express server running!!');
})

//Star server
app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
});