const express= require('express');
const app =express();
app.use((req,res,next)=>{
    console.log("middleware");
    next();
});
app.use((req,res,next)=>{
    console.log("next middleware");
    res.send("hello");
});
app.listen(4000);