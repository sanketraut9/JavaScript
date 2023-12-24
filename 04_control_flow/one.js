// < , > , <= , >= , == , != , === , !==

const loggedIn = true;
const temprature = 38;

if (loggedIn) {
    console.log("Logged In");
}


// if (temprature < 40) {
//     console.log('Temprature is less than 40.');
// } else {
//     console.log('Temprature is greater than 40.');
// }

// console.log("Execute!");


// const score = 200;

// if (score > 100) {
//     const power = 'fly';
//     console.log(`user power: ${power}`);
// }

// console.log(`user power: ${power}`);    // power is not define -> out of scope


const balance = 1800;

// if (balance > 300) console.log('test1'), console.log('test2');   //not good practice


// if (balance < 500) {
//     console.log('balance is less than 400');
// } else if (balance < 900){
//     console.log('balance is less than 900');
// }else if (balance < 1500) {
//     console.log('balance is less than eual to 500');
// }else{
//     console.log('balance is greater than 1500');
// }



const userLoggedIn = true
const debitCard = true

const loggedInFromGoogle = true
const loggedInFromEmail = false


// if (userLoggedIn && debitCard) {
//     console.log("Allow to buy course");
// }

// if (loggedInFromGoogle || loggedInFromEmail) {
//     console.log('User logged in');
// }


//Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 15


console.log(val1);


//Terniary Operator

//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log('more than 80');


