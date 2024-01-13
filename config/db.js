const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/myNpDb');
    const db = mongoose.connection;
    db.once('open', () => {
        console.log('Connected to MongoDB Database');
    })

    db.on('error', (err) => {
        console.log(`MongoBD connecttion error. error -> ${err}`);
    })
}

module.exports = connectDB;