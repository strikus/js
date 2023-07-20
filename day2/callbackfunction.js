/// callback functions

// function myFunc(a){
//     console.log(a);
//     console.log('hello world');
// }

// myFunc({name:"lid"}) //a can be anything integer string array object

// can a argument can be function

function myFunc2(){
    console.log("inside my function");
}
function myyFunc3(callback){
    console.log("hello there by convention name is callback");
    callback(); // the parameter will be treat as function as myFUnc2 passed as argument

}
myyFunc3(myFunc2) // direct print full function 


function myFunc4(name){
    console.log("inside my function");
    console.log(`your name is ${name}`);
}
function myyFunc8(callback){
    console.log("hello there by convention name is callback");
    callback("name"); // the parameter will be treat as function as myFUnc2 passed as argument

}
myyFunc8(myFunc4)

// koi bhi function as input liya = callback



function kid(a,b){
    console.log("inside func2");
    console.log(a+b);
}

function kidfunc(callback,a,b){
    console.log("kidfunc");
    callback(a,b);
   
}


kidfunc(kid,3,4)