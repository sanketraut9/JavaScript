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