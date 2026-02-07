const variables = ()=> {
    var a = 45;
    let b= 67;
    const c = 56;

    var a = 78;
    b = 69;

    return{a,b,c};
};

const x =(m) => {
    if(m >=90) return "Scollarship";
    else if(m >=70) return "A";
     else if(m >=60) return "b";
      else return "Fail";

};

const arr = ()=> {
    const nums = [10,20,30,40];
    //multi 2
    //filter below20 data
    //total sum  element 
    
}

module.exports = {variables,x};