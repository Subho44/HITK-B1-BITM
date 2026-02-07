
const basic = require("./modules/basic");
const es6 = require("./modules/es6");
const miniprod = require("./modules/miniprod");


console.log("variable data:",basic.variables());
console.log("condition data:",basic.x(98));
console.log("es6 data:",es6.add(45,45),es6.ds(500),es6.sop(),es6.userinfo({name:"raj",city:"kolkata"}));


console.log("\n get all products: ");
console.log(miniprod.getall());


console.log("\n add products: ");
console.log(miniprod.addproduct({id:3,name:"tab",price:670,stock:2}));
console.log(miniprod.getall());

console.log(miniprod.sp("wa"));

console.log("\n update products: ");
console.log(miniprod.up(1,{price:67099,stock:2}));
console.log(miniprod.getall());