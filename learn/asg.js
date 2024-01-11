const http=require('http');
const server= http.createServer((req,res)=>{
    const url= req.url;
    if(url=== '/'){
        res.write("<html>");
        res.write("<head><title>hello</title></head>");
        res.write("<body> ");
        res.write("<h1>hello</h1>");
        res.write("<h1><form action='/createuser' method='POST'><input type='text'> <button type='submit'>send</button> </form></h1>");
        res.write("</body>");
        res.write("</html>");
        return res.end();
    } 
    if(url==='/users'){
        res.write("<html>");
        res.write("<body><ul><li>one</li><li>two</li></ul></body>");
        res.write("</html>");
        res.end();
    }

});

server.listen(4000);