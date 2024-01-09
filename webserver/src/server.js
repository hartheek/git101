
const path=require('path');
const express=require('express');
console.log(__dirname)
console.log(path.join(__dirname, '../public'))
const app=express();

const publicDirectoryPath=path.join(__dirname + '../public');

app.set('view engine','hbs')
app.use(express.static(publicDirectoryPath))

app.get('',(req,res)=>{

    res.render('index',{
        title:'hartgheek'
    })
})
app.get('/help',(req,res)=>{
    res.send("got your help")
})
app.listen(4000,()=>{
    console.log("server is running");
}) 