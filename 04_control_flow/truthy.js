const userEmail = 'sam@gmail.com'
let arr = []

if (userEmail) {
    console.log('got user mail');
} else {
    console.log("don't have user mail");
}


// falsy value 
// false, 0 , -0, BigInt 0n, "" , null , NaN


//Truthy Value
   //"0", 'false', ' ', [], {}, function(){}

   if (arr.length === 0){
    console.log("Array is empty");
   }


   const emptyObj = {}

   if (Object.keys(emptyObj).length === 0) {
    console.log("Obj is empty");
   }


   