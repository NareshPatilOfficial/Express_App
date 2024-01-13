require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect(process.env.MONGOBDB_URL);
    const db = mongoose.connection;
    db.once('open', () => {
        console.log('Connected to MongoDB Database');
    })

    db.on('error', (err) => {
        console.log(`MongoBD connecttion error. error -> ${err}`);
    })
}

module.exports = connectDB;