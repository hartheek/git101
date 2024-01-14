const express= require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.send("Users");
});
router.get('/userdetails',(req,res)=>{
    res.send("User details")
});
module.exports =router;