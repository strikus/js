///every method

const numbers=[2,4,6,8,10]

//check array jitne bhi element bhi even h use every method

// take callback it will check the given condition


const user =numbers.every((number)=>number%2===0)
// callback function ---> true.false boolean
// every method---> true / false booelan if all elements pass the condition
console.log(user)


function isEven(number){
    return number%2===0;
}

const check = numbers.every(isEven)
console.log(check)
// example

const userCart = [
    {productID:1, productName:"mobile", price:12000},
    {productID:2, productName:"laptop", price:33000},
    {productID:3, productName:"tv", price:15000}

]
// check every product less than
// 30000

const ans =userCart.every((cartItem)=>cartItem.price<30000)
console.log(ans)