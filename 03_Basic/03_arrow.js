//This keyword:  current context

const user = {
    username : 'sanket',
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.username = 'Sam'
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     let username = 'sanket'
    // console.log(this);         //{}
//     console.log(this.username);     //undfined - this keyword not work in function
// }

// chai()


// const chai = function(){
//     let username = 'sanket'
//     console.log(this.username);
// }
// chai()




//Arrow function:

// const chai = () =>{
//     let username = 'sanket'
//     console.log(this);     // {}
// }
// chai()



// const addTwo = (num1, num2)=>{
//     return num1 + num2
// }


// Implicit return: no need to writre return keyword

// const addTwo = (num1, num2)=>  num1 + num2


// const addTwo = (num1, num2)=>  (num1 + num2)

const addTwo = (num1, num2)=>  ({username: 'SANKET'})     

console.log(addTwo(5,6));


