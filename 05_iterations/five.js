// The forEach() method of Array instances executes a provided function once for each array element.
//forEach(callbackFn): 
// forEach(callbackFn, thisArg)

const coding = ['js', 'cpp', 'java', 'py', 'ruby']

// coding.forEach( function (value) {
//     console.log(value);
// })

// coding.forEach( (value) => {
//     console.log(value);
// })



// function printMe(item) {
//     console.log(item);
// }
// coding.forEach(printMe)


// coding.forEach( (item, index, array) => {
//     console.log(item, index, array);
// })



const myCoding = [
    {
        language: 'javaScript',
        fileName: 'js',
    },
    {
        language: 'java',
        fileName: 'java',
    },
    {
        language: 'python',
        fileName: 'py'
    }
]

myCoding.forEach( (item) => {
    console.log(item.fileName);
})