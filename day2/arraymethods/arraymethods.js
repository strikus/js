// important array method

// forEach
//map
//filter
// reduce

const number = [4,23,423,23];

// function take first element and index and do multiply print

// function mulbyTwo(number,kid){
//       console.log("kid is ", kid);
//       console.log("number mult"+number*2);
// }

// mulbyTwo(number[0],0)
// mulbyTwo(number[1],1)

// for(let i =0; i<number.length;i++){
    
//     mulbyTwo(number[i],i)
// }

// use foreach instead for loop

// number.forEach(mulbyTwo) 
// foreach work as callback take input as number and index and return it
// foreach first go to number take first number then pass to mul function its number and index]
// jo function me likha vo kaam renga

// foreach more 
// anonymous function
number.forEach(function(number,index){

    console.log("kid is ", index);   
    console.log("number mult"+number*2);


});

// ex

number.forEach(function(no,index)
// write index is not neccessary
{
    console.log(no*3,index);
})


// realistic example

const users =[
    {
        firstName:"harshit",age:23
    },
    {
        firstName:"mohit",age:29
    },
    {
        firstName:"garmia",age:28
    },
    {
        firstName:"nithsh",age:25
    }
    
]

// users.forEach(function(user){
//     console.log(user.firstName);
// })
// aas arrow functiom
users.forEach((user,index)=>{
        console.log(user.firstName,index);
 } )

// for(let user of users){
//     console.log(user.firstName);
// }