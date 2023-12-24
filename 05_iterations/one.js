//For

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 9) {
        // console.log('9 is best number');
    }
    // console.log(element);
}


for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop: ${j}`);
        // console.log(i +'*'+ j +'='+ i * j);
        // console.log(`${i} * ${j} = ${i * j}`);
        
    }    
}


let myArray = ['Batman', 'Superman', 'Flash', 'Ironman']
// console.log(`Arrays length: ${myArray.length}`);

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
}


//Break and continue

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log("Detected 5! ");
        break;
    }
    console.log(`Value of i is ${i}`);    
}


for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log("Detected 5");
        continue;
    }
    console.log(`Value of i is ${i}`);    
}