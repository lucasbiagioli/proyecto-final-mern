const mongoose = require('mongoose');
require('dotenv').config();

const initDBConnection = ()=>{
    const DB_CONNECTION_STRING = process.env.DB_URL_CONNECTION;
    mongoose.set('strictQuery', false)
    mongoose.connect(DB_CONNECTION_STRING)
    .then(()=>{
        console.log('DB Connection Successfull')
        })
        .catch((err)=>{
            console.log(err)
            })
}

module.exports = initDBConnection