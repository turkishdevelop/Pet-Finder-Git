const passport = require('passport');
const jwt = require('jsonwebtoken');
require('dotenv').config({path:'./utils/config.env'});
const appConfig = process.env;

module.exports.register = function (request,response,next) {

    response.send({message:"Kayıt Başarılı"});
};