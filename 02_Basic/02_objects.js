//Singlton: 
// const me = Object.create(person);

const mySymb = Symbol("key1")            //declare symbol and used as key in object

//Object literals
const jsUser = {
    name : "Sanket",
    "full name" : "Sanket Raut",
    mySymb : "myKey2",
    [mySymb] : "myKey1",             //symbol  used a key          
    age : 25,
    location: "Pune",
    email : "sanket@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Thurday"]
}

// console.log(jsUser.name);
// console.log(jsUser['name']);

// console.log(jsUser["full name"]);

// console.log(jsUser.mySymb);        //undefined
// console.log(jsUser[mySymb]);            //myKey1   //syntax to access symbol


// jsUser.age = 26

// Object.freeze(jsUser)
// jsUser.age = 24
// console.log(jsUser);



jsUser.greeting = function() {
    console.log("Hello JS User");
}

console.log(jsUser.greeting());

jsUser.greetingTwo = function() {
    console.log(`Hello JS User, ${this.name}`);
}

console.log(jsUser.greetingTwo());