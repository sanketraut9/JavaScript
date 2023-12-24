//for of
//Array specific loop

// ["", "", ""]
// {'', '', ''}


let arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}


const greetings = 'Hello World!'
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}



//Maps

const map = new Map()
map.set('In', 'India')
map.set('Fr', 'France')
map.set('Br', 'Brazil')
map.set('In', 'India')

// console.log(map);


for (const [key, value] of map) {
    // console.log(key, ': ', value);   
}
