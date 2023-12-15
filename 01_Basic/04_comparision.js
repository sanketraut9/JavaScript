// console.log(2 > 1);
// console.log(2 >= 2);
// console.log(5 < 9);
// console.log(3 == 3);
// console.log(3 != 4);


// console.log("3" > 4);   //false   // convert sring into number
// console.log("02" > 1);  //true

// console.log(null > 0);   //false
// console.log(null == 0);   //false
// console.log(null >= 0);   //true
// console.log(null <= 0);   //true


// The reason is that an euality check == and comparision > <>= <=
//  work differently.
// Comparision convert null into number, treating it as 0.
// That's why (3 & 4) null >= 0 and null <= 0 is true and (1)
// null > 0 is false


// console.log(undefined == 0);  //false
// console.log(undefined > 0);   //false
// console.log(undefined < 0);   //false

 

//Strict check ===

console.log(1 === "1"); //false
