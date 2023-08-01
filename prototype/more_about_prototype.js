let numbers=[1,2,3]
// numbers.
//  js get this methods from prootype but we talked prototype for only function
// internallly js create array
/// as let numbers = new Array(1,2,3)\
// this has all methods
// check prototype of numbers
console.log(Object.getPrototypeOf(numbers)) // array also prototype
// in function prototype in object
// by default it is object and in array it in array
// change prototype type

function hello(){
    console.log("hello")
}
hello.prototype=[]
console.log(hello.prototype)
hello.prototype.push('5')
console.log(numbers)