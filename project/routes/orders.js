const express= require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.send("Orders");
});
router.get('/orderdetails',(req,res)=>{
    res.send("Order details")
});
module.exports =router;