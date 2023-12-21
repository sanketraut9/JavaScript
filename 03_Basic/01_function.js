function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("M");
}

// sayMyName()

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2){
    let result = num1 + num2
    // console.log("Result: ", result);
    return result
    // return num1 + num2
}
// addTwoNumbers(6,7)

const result = addTwoNumbers(6,5)
// console.log("result: ", result);


function loggedInMsg(username = "Sam"){
    return `${username} just logged in`
}

console.log(loggedInMsg("Sanket"));


//Rest operator ...

function calculateCartPrice(val1, val2, ...num){
    return num
}

console.log(calculateCartPrice(100,200,300,400));

//handle Objects

const user = {
    username : "Ronny",
    age : 22
}

function handleObject (anyobject){
    console.log(`Usename is ${anyobject.username} and his Age is ${anyobject.age}`);    
}
// handleObject(user)

handleObject({
    username: "Sam",
    age : 26
})



//handle Array

const myNewArray = [122,33,4,54,66]

function returnValue(getArray){
    return getArray[3]
}

// console.log(returnValue(myNewArray));   //54

console.log(returnValue([32,34,45,56,76,87]));     //56

