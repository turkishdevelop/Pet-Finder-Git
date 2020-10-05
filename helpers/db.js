const mongoose = require('mongoose');
require('dotenv').config({path:'./utils/config.env'});
const appConfig = process.env;

module.exports.connectToDatabase = function () {
    mongoose.connect(appConfig.DB_HOST, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,useFindAndModify:false}, () => {
        console.log('Database Connected');
    });
};