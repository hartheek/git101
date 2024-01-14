const express= require('express');
const app =express();
app.use((req,res,next)=>{
    console.log("middlewareeee");
    next();
});
app.use((req,res)=>{
    console.log("next middleware");
    
});
app.get('/',(req,res)=>{
    res.send("Hello00")
});
app.listen(4000);