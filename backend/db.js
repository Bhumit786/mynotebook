const mongoose = require('mongoose');
const mongoUri = 'mongodb://127.0.0.1';

const connectToMongo = async ()=>{
    mongoose.connect(mongoUri).then(()=>{
        console.log("connected")
    });
}

module.exports = connectToMongo;