const http =require('http');

//create server

const server = http.createServer((req,res)=>{
   if(req.url === "/") {
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("<h1>home page</h1>");
    }
    else if (req.url === "/about") {
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("<h1>about page</h1>");
    }
    else if (req.url === "/api/product") {
    const product = {
        name:"iphone",
        price:780000,
        status:"pending"
    }

    res.writeHead(200,{"Content-Type":"application/json"});
    res.end(JSON.stringify(product));
    }




});
server.listen(5600,()=>{
    console.log("server is running port 5600");
});