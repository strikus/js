// intro to arrays
// refrence  type
// how to create arrays

// ordered collection of items
// can store any data type
// let fruits = ["apple","mango", "grapes"];
// let number = [1,23,4,2]
// let mixed = [23,2,2,32,323,3,"LID",null,undefined]
// console.log(number);
// console.log(mixed);
// console.log(fruits[0]);
//array indexing 

let fruits = ["mango", "apple","grapes"];
console.log(fruits);
fruits[1]="banana" // changed the prev array
console.log(fruits);
// refrence type we call them as object 
// array = object

console.log(typeof fruits); // object

let obj={} // object literal 
console.log(typeof obj);
// how we know it is array  or literal
console.log(Array.isArray(fruits));
