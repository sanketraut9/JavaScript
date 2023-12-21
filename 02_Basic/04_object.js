//Destructure:


const cource = {
    courceName : "JS in hindi",
    price : "999",
    courceInstructor : "Sanket"
}

// console.log(cource.courceInstructor)

const {courceInstructor} = cource
// console.log(courceInstructor);

const {courceInstructor : instructor} = cource
// console.log(instructor);

 

//JSON:
// {
//     "name" : "sanket",
//     "courceName" : "JS in Hindi",
//     "price" : "free"
// }