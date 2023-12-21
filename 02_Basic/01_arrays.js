//Array

const myArr = [4,5,6,8,9]
let myHeros = ['Ironman', 'Batman','spiderman']
const arr2 = [4,5,6,8,9,'Ironman', 'Batman','spiderman']
// console.log(arr2);

let myarr2 = new Array(7,6,5,4,3)
// console.log(myarr2);



//Array Methods

myarr2.push(1)

myarr2.pop()

myarr2.unshift(1)

myarr2.shift()


// console.log(myarr2.includes(3));
// console.log(myarr2.indexOf(4));

// const newArr = myarr2.join()
// console.log(newArr);
// console.log(typeof newArr);
// console.log(myarr2);



//Slice and Splice

// console.log("A", myarr2);         //A [ 7, 6, 5, 4, 3 ]

// const newMyArr = myarr2.slice(1, 3)
// console.log(newMyArr);               //[ 6, 5 ]

// console.log("B", myarr2);            //B [ 7, 6, 5, 4, 3 ]

// const newMyArr2 = myarr2.splice(1, 3)
// console.log(newMyArr2);                //[ 6, 5, 4 ]

// console.log("C", myarr2);                   //[ 7, 3 ]
 


//

const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const DC_heros = ["Superman", "Batman", "Flash"]

// marvel_heros.push(DC_heros)
// console.log(marvel_heros);   //[ 'Thor', 'Ironman', 'Spiderman', [ 'Superman', 'Batman', 'Flash' ] ]       //Manupulate original array
 

// console.log(marvel_heros[3][2]);      //Flash


// const all_Heros = marvel_heros.concat(DC_heros)       //
// console.log(all_Heros);          //[ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Batman', 'Flash' ]
 
// const allHeros = [...marvel_heros, ...DC_heros]
// console.log(allHeros);                       //[ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Batman', 'Flash' ]


const arrA = [1, 2, 3, [4, 5], [6, 7, [8, 9]]];

// const realArrA = arrA.flat()       //[ 1, 2, 3, 4, 5, 6, 7, [ 8, 9 ] ] //spread out to depth 1
// console.log(realArrA);

const realArrA = arrA.flat(Infinity)      //[1, 2, 3, 4, 5,6, 7, 8, 9 ]        // spread out to all depth
// console.log(realArrA);




// console.log(Array.isArray("Sanket"));          //false

console.log(Array.from("Sanket"));        //[ 'S', 'a', 'n', 'k', 'e', 't' ]


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));   //[ 100, 200, 300 ]
