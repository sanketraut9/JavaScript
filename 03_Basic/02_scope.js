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

// console.log(a);     //200
// console.log(b);     //99
// console.log(c);      //30



function one(){
    const username = "Sanket"

    function two(){
        const wesite = 'Youtube'
        console.log(username);
    }
    // console.log(wesite);      //error - website not define

    two()
}

one()



if(true){
    const username = 'sanket'
    if(username === 'sanket'){
        const website = ' youtube'
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// ********************** Interesting *********************//
console.log(addone(4));

function addone(num){
    return num + 1
}


// console.log(addTwo(4));                //Cannot access 'addTwo' before initialization 

const addTwo = function(num){
    return num + 2
}

console.log(addTwo(4));         //6