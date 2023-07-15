// array push pop

//array shift unshift 

let fruits = ["mango", "orange","grapes"];
console.log(fruits);
// arr is mutable string is not

//push add item in end
// fruits.push("banana")
// console.log(fruits);

// pop // remove last element and return the element too that got removed
// fruits.pop(); // whenever we write this execute
// let pooped=fruits.pop();
// // console.log(fruits.pop()); // 
// console.log(fruits)
// console.log(`removed fruit is ${pooped}`);

// unshift add in starting
// fruits.unshift("banana");
// fruits.unshift("myfruit");
// console.log(fruits); // [
    // "myfruit",
    // "banana",
    // "mango",
    // "orange",
    // "grapes"



    // shift remove from start


    let removed = fruits.shift();
    console.log(fruits);
    console.log(`removed fruit is from beginnig is ${removed}`);


    // speed push and pop are fast than unshift and shift
