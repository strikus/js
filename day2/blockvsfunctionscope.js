// block scope vs function scope

// let and  const are block scope
// var is function scope


// {
//     let firstName="harshit"
//     console.log(firstName);
// }
// // console.log(firstName);// cant access out of block scope 
// {
//     const firstName="kid"
//     console.log(firstName); // kid
// }
// const firstName= "garima";
// console.log(firstName);
// harshit kidgarima

// 2 var function scope

// {
//     var firstName= "can use everywhere"

// }

// console.log(firstName); // can access outside of block 


if(true){
    let firstName="harshit";
    console.log(firstName);
}
// {}if block

// console.log(firstName);// in let give erro in var give log  on console

function myApp(){
    if(true){
        var firstName="harshit";
        console.log(firstName);
    }
    if(true){
        
        console.log(firstName);
    }
    console.log(firstName);

}

myApp(); //will give error because let inside of if block when call myApp firstName is not in lexical scope so error and in var it available to all so it will print


