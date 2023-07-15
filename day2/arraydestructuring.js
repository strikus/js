// array destructuring
const myArray=["value", "value2","valie3"]
// store 0 index value and 1th index in diff var

// let myVar1=myArray[0];
// let myVar2=myArray[1];
// console.log(myVar1);
// console.log(myVar2);

let [myVar1,myVar2]= myArray; // 0th 1th store 
// two normal var creates can change their value
console.log(myVar1,myVar2);

// to skip index
let [myVar3, , myvar4]=myArray;
console.log(myVar3);
console.log(myVar4);