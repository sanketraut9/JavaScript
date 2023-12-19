const name = "sanket"
const repoCount = 30

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String("Sanky")

console.log(gameName.length);  //5
console.log(gameName[0]);      //S
console.log(gameName.charAt(2));  //n
console.log(gameName.indexOf('S'));  //0
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());   //SANKY

let newString = gameName.substring(0, 4)
console.log(newString);

console.log(gameName.slice(-4, 4));

const newStringOne = '  Dnyana   '
console.log(newStringOne);
console.log(newStringOne.trim());   'Dnyana'


const url = "http://sanket.com/sanket%20raut"

console.log(url.replace('%20', '-'));        //http://sanket.com/sanket-raut

console.log(gameName.includes("sam"));  //false



const username = "sanket-raut-sr"
console.log(username.split("-")); //[ 'sanket', 'raut', 'sr' ]