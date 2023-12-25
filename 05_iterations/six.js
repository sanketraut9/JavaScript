const coding = ['js', 'cpp', 'java', 'py', 'ruby']

// coding.forEach( (item) => {
//     console.log(item);
// })

// const values = coding.forEach( (item) => {
//     console.log(item);
// })

// console.log(values);        //undefined



const myNums = [1,2,3,4,5,6,7,8,9,10]

// let newNums = myNums.filter((num) => num > 4 ) 

// console.log(newNums);          //[ 5, 6, 7, 8, 9, 10 ]


//
// let newNums = myNums.filter((num) => {
//     return num > 4
// }) 

// console.log(newNums);                   //[ 5, 6, 7, 8, 9, 10 ]


// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })

// console.log(newNums);               //[ 5, 6, 7, 8, 9, 10 ]



const book = [
    {title: 'Book one', genre: "History", publish: 1998, edition: 2009},
    {title: 'Book two', genre: " Science", publish: 2000, edition: 2014},
    {title: 'Book three', genre: "History", publish: 2002, edition: 2012},
]

let userBook = book.filter((bk) => bk.genre === 'History')

userBook = book.filter( (bk) => {
    return bk.publish > 1999 && bk.genre === 'History'
})

console.log(userBook);