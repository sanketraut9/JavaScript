//Immediately Invoked Function Expressions (IIFE)
    // the function who execute immediate after declaration
    //to remove global variabls / declarations polution we use IIFE


    (function chai(){               //named IIFE
        console.log("DB CONNECTED");
    }) ();

    

    ((name) => {
        console.log(`DB ONNECTED TWO ${name}`);
    }) ('sanket')