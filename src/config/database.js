const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGODB_URI;  // This will now correctly reference the .env variable
console.log(uri);

const connectDB = async () => {
    try {
        await mongoose.connect(uri);  // Use the uri constant here
        console.log('MongoDB connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1); // Exit the process with failure
    }
};

module.exports = connectDB;
