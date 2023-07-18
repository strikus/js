// hoisting
hello1(); // print before declare of fn
// note this notwork in arrow fn and expression
function hello1(){
    console.log("hello world");
}

// 
console.log(hello); // undefined
var hello = "hello world"
console.log(hello); //print hello world

