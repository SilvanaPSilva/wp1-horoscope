import 'dotenv/config';
import express from 'express';
import cors from 'cors';

// Import DB connection (MongoDB Driver)
import db from './db.mjs';

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

//Star server (http://localhost:3000)
app.listen(3000, '0.0.0.0', () => {
    console.log(`Server is running on port 3000`);

/* EC2
    Type: Custom TCP
    Port: 3000
    Source: 0.0.0.0/0
    */
});