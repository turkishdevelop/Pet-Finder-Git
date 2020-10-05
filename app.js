const app = require('express')();
require('dotenv').config({path:'./utils/config.env'});
const appConfig = process.env;
const database = require('./helpers/db');
const userController = require('./controllers/userController');
//const petController = require('./controllers/petController');
database.connectToDatabase();

app.use('/api/user',userController);
//app.use('/api/pet',petController);



app.listen(appConfig.SERVER_PORT,()=>{
    console.log('Started Server on '+appConfig.SERVER_PORT);
});