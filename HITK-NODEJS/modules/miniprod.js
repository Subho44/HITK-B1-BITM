
let products = [
    {id:1, name:"laptop", price:78000,stock:10},
    {id:2, name:"watch", price:780,stock:5}
];

//getall product

const getall = ()=> products;

//add product
const addproduct = (newproduct)=> {
    products = [...products,newproduct];
    return products;

};
//search product

const sp = (keyword) => {
    const k = keyword.toLowerCase();
    return products.filter((p)=>p.name.toLowerCase().includes(k));
};
//update
const up = (id,data={})=> {
    products=products.map((p)=>
        p.id === id ?{...p,...data} : p
    );
    return products;
};
//delete
const dp = (id)=> {
 products = products.filter((p)=>p.id !== id);
 return products;
};

module.exports = {
    getall,
    sp,
    up,
    dp,
    addproduct
}