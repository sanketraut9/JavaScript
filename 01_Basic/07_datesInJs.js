//Dates

// let myDate = new Date()
// console.log(myDate);

// console.log(myDate.toDateString());    //current date

// console.log(myDate.toLocaleString());    //dd/mm/yy  time

// console.log(myDate.toISOString());

// console.log(typeof myDate);   //object


// let myNewDate = new Date(2023, 0, 1)     

// // console.log(myNewDate.toDateString());  //  Sun Jan 01 2023


let myNewDate = new Date("2023-01-12")     
// console.log(myNewDate.getDate());    //
// console.log(myNewDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);

console.log(myNewDate.getTime());
console.log(Math.floor(Date.now()/1000));