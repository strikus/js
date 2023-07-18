// primitives and reference types 
let num1=6;
let num2=num1;

console.log("value of num1 is ", num1);//6
console.log("value of num1 is ", num2);//6
num1++;
console.log("value of num1 is ", num1);//7
console.log("value of num1 is ", num2);//6


//refrence type
//array
let array1=["item1","item2"]
let array2=array1;
console.log("array1 is", array1);
console.log("array2 is", array2);
array1.push("item3");
console.log("array1 is", array1);
console.log("array2 is", array2);


// primitive variables stores in stack 
// reference var store in stack where as its value obj stores in heap 