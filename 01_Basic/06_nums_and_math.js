const score = 400
console.log(score);       //400

const balance = new Number(100)
console.log(balance);        //[Number: 100]

console.log(balance.toString());
console.log(typeof balance);   //object

console.log(balance.toString().length);   //3

console.log(balance.toFixed(2))   //100.00



const anotherNum = 123.789
console.log(anotherNum.toPrecision(3));      //124


const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN'));      //1,00,000


/*++++++++++++++++++++++++++++++++++ Math +++++++++++++++++++++++ */

console.log(Math.abs(-3)); //3
console.log(Math.round(5.4)); //5
console.log(Math.ceil(5.2)); //6
console.log(Math.floor(5.9));  //5
console.log(Math.min(4,5,6,3,2));      //2
console.log(Math.max(4,5,6,3,2));         //6


console.log(Math.random());        //rendom value between 0 to 1  //0.02766950239740429

console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);     