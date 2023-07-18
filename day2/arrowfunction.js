// arrow function 



const singHappyBday = ()=>{
    console.log("happy birthday");
}
singHappyBday();

const ans =(a,b,x)=>{
    return a+b+x
}

console.log(ans);
// const returned = ans(2,34,34)
console.log(ans(2,34,34));


// const isEven = number=>{
//     return number%2===0;
// }

// console.log(isEven(3));

// we can remove parathensis if there is one input parameter

// can return in one line

const isEven = number=> number%2===0;
console.log(isEven(4));

const singHappyBday1 = ()=>console.log("happy birthday");

singHappyBday();

const ans1=(a,b,x)=>
     a+b+x;

     console.log(ans1(23,23,423));

