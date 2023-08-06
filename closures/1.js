// function can return function

// we can return object string num etc

// function myFunc(){
//     // return 1;
//     // return {1:"2"}
//     // return "kid"
// }
//
// const ans =myFunc();
// console.log(ans);

function outerFunction(){
    function innerFunction(){
        console.log("hello world")
    }
    return innerFunction;  // Return the function without invoking it
}

const ans = outerFunction();  // Now ans holds a reference to the innerFunction
console.log(ans);
ans()// Invoke innerFunction using the reference

function printFUllName(firstName,lastName){
    function printName(){
        console.log(firstName,lastName)
    }
    return printName;
}
const ans1= printFUllName("rohit","prajapat")
console.log(ans1)
ans1()

// sbse phele