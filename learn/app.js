const http= require('http');


const server= http.createServer((req, res)=>{
    console.log(req);
    if(req.url ==='/'){
        res.write('Hello World');
        res.end();
    }

});
server.listen(3000);