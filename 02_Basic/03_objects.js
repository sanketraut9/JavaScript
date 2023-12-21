// const tinderUser = new Object()      // Singleton

const tinderUser = {}    //non-Singlrton

tinderUser.id = '123asd'
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email : "sam@gmail.com",
    fullname : {
        firstName : "Rahul",
        lastName : "Raut"
    }
}

// console.log(regularUser);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.firstName);


let obj1 = {1 : 'a', 2 : 'b'}
let obj2 = {3 : 'c', 4 : 'd'}
let obj3 = {5 : 'e', 6 : 'f'}

//wrong way
// let obj4 = Object.assign(obj1, obj2, obj3)
// console.log(obj1);                 //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

// let obj4 = Object.assign({}, obj1, obj2, obj3)      

let obj4 =  {...obj1, ...obj2, ...obj3}                 

// console.log(obj4);
// console.log(obj1); 


const user = [
    {
        id : 1,
        name : "Ram"
    },
    {
        id : 2,
        name : "Dnyana"
    }
]

// console.log(user[0].name)



// console.log(tinderUser);       //{ id: '123asd', name: 'Sam', isLoggedIn: false }

let keysArray = Object.keys(tinderUser)
// console.log(keysArray);         //[ 'id', 'name', 'isLoggedIn' ]

let valuesArray = Object.values(tinderUser)
// console.log(valuesArray);          //[ '123asd', 'Sam', false ]

let entriesArray = Object.entries(tinderUser)
// console.log(entriesArray);         //[ [ 'id', '123asd' ], [ 'name', 'Sam' ], [ 'isLoggedIn', false ] ]


// console.log(tinderUser.hasOwnProperty('isLoggedIn'));         //true



