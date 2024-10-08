// Import required packages
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const bcrypt = require('bcryptjs'); // bcrypt for password hashing
const User = require('./models/User'); // User model from './models/User'
const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json()); // To parse incoming JSON requests

// Connect to MongoDB (adjust the MongoDB URI as necessary)
const mongoURI = 'mongodb://localhost:27017/customerPaymentsPortal'; 
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Basic route to check if the server is running
app.get('/', (req, res) => {
    res.send('Server is up and running!');
});

// Registration Route
app.post('/api/register', async (req, res) => {
    const { fullName, idNumber, accountNumber, password } = req.body;

    try {
        // Check if the user already exists (for duplicate ID or account numbers)
        const existingUser = await User.findOne({ accountNumber });
        if (existingUser) {
            return res.status(400).json({ msg: 'Account already exists' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const newUser = new User({
            fullName,
            idNumber,
            accountNumber,
            password: hashedPassword
        });

        await newUser.save();
        res.json({ msg: 'User registered successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
