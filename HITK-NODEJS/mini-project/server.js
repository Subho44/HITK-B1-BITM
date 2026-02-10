const http =require('http');
const path = require('path');
const fs = require("fs");


const products = [];
//create server

http.createServer((req,res)=>{
    //home page display
if(req.url ==="/" && req.method ==="GET") {
    const file = fs.readFileSync(path.join(__dirname, "index.html"));
     res.writeHead(200,{"Content-Type":"text/html"});
    return res.end(file) ;
}
//add product
if(req.url ==="/add" && req.method ==="POST") {
    let body = "";
    req.on("data", chunk => body += chunk);
    req.on("end",()=>{
        const data = body.split("&").map(x=>x.split("="));
        const name = decodeURIComponent(data[0][1].replace("+",""));
        const price = decodeURIComponent(data[1][1].replace("+",""));

        products.push({name,price});
         res.writeHead(200,{"Location":"/view"});
         res.end();

    });
return;
}
//view
if(req.url ==="/view" && req.method ==="GET") {
   
     res.writeHead(200,{"Content-Type":"text/html"});
     let html = "<h2>Product list</h2> <a href='/'>add</a> <br>";
     if(products.length === 0) {
        html += "noproduct"
     } else {
        html += "<ul>";
        products.map(p=>{
            html += `<li>${p.name} -  $ ${p.price}</li>`
        });
        html +="</ul>";
     }
    return res.end(html) ;
}

}).listen(5600,()=>{
    console.log("server is running port 5600");
});