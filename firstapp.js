const http= require('http');
const server=http.createServer((req,res) =>{
    res.end("hello");
    console.log("new req received");
});

server.listen(8000,'127.0.0.1',() =>{
    console.log("srever started");
});