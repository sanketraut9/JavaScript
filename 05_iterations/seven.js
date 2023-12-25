//Map:
//map(callbackFn)

const myNums = [1,2,3,4,5,6,7,8,9,10]

let newNums =  myNums.map( (num) => num + 10)

// newNums =  myNums.map( (num) => {
//     return num + 10
// })

newNums = myNums
          .map( (num) => num * 2)
          .map((num) => num + 2)
          .filter( (num) => num > 10)

console.log(newNums);