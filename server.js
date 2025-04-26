const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Initializing dotenv to acces environment variables
dotenv.config();

// Initializing Express App
const app = express();
app.use(cors());
app.use(express.json());

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// Middleware
app.use(express.json()); //for parsing json request body
app.use(cors()); //enables cors for all requests

// connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch((error) => console.log('MongoDB connection error:', error))

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to pet Care API')
})

// Starting the Server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})