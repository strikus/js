// reduce method 
// take callback function

const numbers=[1,2,3,4,5,10];

// aim: sum of all the numbers in array

const sum =numbers.reduce((accumulator,currentValue)=>{
    return accumulator+currentValue// will return array sum
},100);
// we can change by defualt value of accumulator=1 so we can change it by givingg initial value in end of arrow functiom

console.log(sum); //15
// how it works 

// accumulator     currentValue    RETURN
 //      1               2           3
 //      3               3           6
 //      6               4           10
 //      10              5           15
 //      15              10          25

const userCart =[
    {productID:1, productName:"mobile",price:12000},
    {productID:2, productName:"laptop",price:18000},
    {productID:3, productName:"tv",price:50000}
]

// total cnhahie 
// can use for loop but use reduce

const totalAmount=userCart.reduce((totalPrice,currentProduct)=>{
    return totalPrice+currentProduct.price
},0)
console.log(totalAmount);

// totalprice  currentProduct     return

//     0            {}             12000;
//     12000        18000          30000; 
//     30000        50000          80000;
 
