// map methods
// forEach can console log and it nor return array as map
const numbers =[3,34,35,32,1];
const numbers1 =[3,34,35,32,1];

const square = function(numbers){
    // console.log(numbers*numbers)
    // 9 1156 1225 1024 1
    //   [undefined, undefined, undefined, undefined, undefined]
    return numbers*numbers
}
const squarenumber = numbers.map(square)
console.log(squarenumber);

numbers.map(square);
// it return map make new array

const sq= numbers1.map((number,index)=>
{
    return `index:${index},${number*number}`

})
console.log(sq);
// can store index (5) ['index:0,9', 'index:1,1156', 'index:2,1225', 'index:3,1024', 'index:4,1']

// numbers.map() we can make callback function inside() or outside too



// as a input take callback functtion
//  it make a new arrray in return that call back function have 

// realistic example

const users = [
    {firstName:"harshit",age:23},
    {firstName:"mohit",age:29},
    {firstName:"garmia",age:28},
    {firstName:"nithsh",age:25}
]

const userNAmes=users.map((user)=>{
    return user.firstName;
})

console.log(userNAmes);
// (4) ['harshit', 'mohit', 'garmia', 'nithsh']