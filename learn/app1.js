const http=require('http');
const fs=require('fs');
const server =http.createServer((req,res)=>{
    const url= req.url;
    const method=req.method;
    if(url ==='/'){
        res.write('<html>');
        res.write('<head><title>Enter message </title></head>');
        res.write('<body><form action="/message" method="POST"> <input type="text" name="message"> <button type="submit">send </button> </form></body>');
        res.write('</html>');
        return res.end();
    }
    if(url==='/message' && method==='POST'){
         fs.writeFileSync('message.txt','Dummy')
         res.statusCode=302;
         res.setHeader('Location','/');
         return res.end();
    }
    res.setHeader('content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Enter message </title></head>');
    res.write('<body>Hello</body>');
    res.write('</html>');
    res.end();


});
server.listen(4000);