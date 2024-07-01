const mongoose = require('mongoose');

const mongoURL = 'mongodb://localhost:27017/AnshulDB';

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
