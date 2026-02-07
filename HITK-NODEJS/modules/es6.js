//arr fun

const add = (a,b) => a+b;
//template literals
const msg =(name,course) => {
    return ` Name:${name} - Course:${course}`;
}
//destructing

const  userinfo = (user)=> {
  const {name,city} = user;
    return ` Name:${name} - City:${city}`;
}
//spread operator

const  sop = ()=> {
const a = [1,3];
const b= [4,7];
const merge = [...a,...b];

return {merge};
}

//default parameter
const ds  = (price, discount=10)=>{
 return price - (price*discount)/100;
};
module.exports = {
    add,ds,userinfo,sop
}
