//forof not work for object

//object we use  forin loop

const myObj = {
    'game1' : 'NFS',
    'game2' : 'Pubg'
}

// for (const [key, value] of myObj) {
//     console.log(key, ': ', value);
// }


const myObject = {
    js: 'javaScript',
    cpp: 'cpp',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    // console.log(key);
    // console.log(myObject[key]);
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}


let programming = ["js","cpp", "rb", "swift"]

for (const key in programming) {
    // console.log(key);          // 0, 1, 2, 3
    // console.log(programming[key]);   //js, cpp, rb, swift
}



//Maps

// const map = new Map()
// map.set('In', 'India')
// map.set('Fr', 'France')
// map.set('Br', 'Brazil')
// map.set('In', 'India')

// for (const key in map) {
//     console.log(key);
// }

//Map are not iterable, so we can not use forin loop for map