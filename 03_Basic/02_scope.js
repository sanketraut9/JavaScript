//Scope


 
var c = 100
let a = 200    //Global scope 
const b = 99  

if(true){
    //block scope
    let a = 10
    const b = 20
    var c = 30

    console.log("Inner: ", a);
}

console.log(a);     //200
console.log(b);     //99
console.log(c);      //30