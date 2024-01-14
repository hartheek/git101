const express= require('express');
const router=express.Router();

router.get('/:key([0-9]{4})',(req,res)=>{
    res.send("Products"+req.params.key);
});
router.get('/productdetails/:id',(req,res)=>{
    res.send("product details"+req.params.id);
});
router.get('*',(req,res)=>{
    var obj={
        statuscode: 404,
        statusmessage: 'URL not found'
    }
    res.send(obj);
});
module.exports =router;