//reduce()

const array1 = [1,2,3,4,5]

// const initialValue = 0;

// const myTotal = array1.reduce((acc, curval) => {
//     console.log(`acc ${acc} and curval ${curval}`);
//     return acc + curval
// },0)                               //accumulator get this value

const myTotal = array1.reduce((acc, curval) => acc + curval, 0)

console.log(`myTotal ${myTotal}`);


const shoppingCart = [ 
    {
    itemName:'JS Cource',
    price: 299
},
{
    itemName:'Python Cource',
    price: 299
},
{
    itemName: 'Adroid dev',
    price: 799
},
]

const priceToPay =  shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(`priceToPay = ${priceToPay}`);