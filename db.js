const mongoose = require('mongoose');
require('dotenv').config();

const mongoURL = process.env.MONGO_URL;
// const MONGO_URL_LOCAL = process.env.MONGO_URL_LOCAL;

async function connectToDatabase() {
    try {
        await mongoose.connect(mongoURL);
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('MongoDB connection error:', err);
    }
}
connectToDatabase();

const db = mongoose.connection;
module.exports = db;
