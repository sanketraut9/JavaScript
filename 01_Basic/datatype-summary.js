//Primitive: a primitive (primitive value, primitive data type) is data that is not an object and has no methods or properties.

// 7 tpes : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 90.3        //Number

const loggedIn = false        //Boolean
const temp = null
let userMail;              //undefined

const id = Symbol('123')
const anotherId = Symbol("123")

console.log(id == anotherId);  //false

const bigNumber = 345667789643n

console.log(typeof bigNumber);      //bigint


//Reference (Non - Primitive) : Array, Object, Function

const heros = ['shaktiman', 'nagraj', 'doga'];
console.log(typeof heros);

let myObj = {
    name : 'sanket',
    age : 25
}

console.log(typeof myObj);

const myFunction = function (){
    console.log("Hello World!");
}

myFunction()

console.log(typeof myFunction);


//***************************************************************** */
/*********************Memory********************* */
//Stack (Primitive) : (change in copy)
let name = "sanket"
let anotherName = name;
anotherName = "Sam"

console.log(name);
console.log(anotherName);

//Heap (Non - Primitive ) 

let userOne = {
    name : "sanny",
    email : "user1@gmail.com",
    upi : "user1@ybl"
}

let userTwo = userOne
userTwo.email = "user@gmail.com"

console.log(userOne);
console.log(userOne);