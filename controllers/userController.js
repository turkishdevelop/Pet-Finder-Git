const express = require('express');
const router = express.Router();
const userRouter = require("../routers/userRouter");


///User Register Router
///@Post
/// Params : [id,name,email...]
router.post('/register',userRouter.register);

///Router =! Controller 

module.exports=router;
