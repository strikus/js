// some method

const numbers=[3,5,8,9]
// kya ek bhi number aesa h jo even h
// return true ek bhi mila agr nhi to false

const ans=numbers.some((number)=>number%2===0);
console.log(ans);
// example

const userCart = [
    {productID:1, productName:"mobile", price:12000},
    {productID:2, productName:"laptop", price:33000},
    {productID:3, productName:"tv", price:15000},
    {productID:3, productName:"macbook", price:112000}

]

const ans1 = userCart.some((product)=>product.price>100000)
console.log(ans1)