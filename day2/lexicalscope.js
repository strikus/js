// lexical scope


// function myApp(){
//     const myVar="value1";
//     function myFunc(){

//     }
//     const myFunc2=function(){}
//     const myFunc3=()=>{}
//     console.log(myVar);
// }

// myApp();
// value1
// 2
// function myApp(){
//     const myVar="value1";
//     function myFunc(){
//         const myVar="value 59"
//         console.log("inside myFunc",myVar);
//     }
//     const myFunc2=function(){}
//     const myFunc3=()=>{}
//     console.log(myVar);
//     myFunc() // will print value59
// }

// myApp(); // value1
// 3
// function myApp(){
//     const myVar="value1";
//     function myFunc(){
//         // const myVar="value 59"
//         console.log("inside myFunc",myVar); // will print lexical environment value (where defined myApp)
//     }
//     const myFunc2=function(){}
//     const myFunc3=()=>{}
//     console.log(myVar);
//     myFunc() // will print value59
// }

// myApp();
// value1
// lexicalscope.js:35 inside myFunc value1
//4
const myVar="value 1"
function myApp(){
    
    function myFunc(){
        
        console.log("inside myFunc",myVar);
    }

    console.log(myVar); 
    myFunc() // global scope
}

myApp();// check in global env (lexical env of it)
// value1 , inside myFunc value1

//5
const myVar1="value 1"
function myApp1(){
    
    function myFunc1(){
        const myFunc4=()=>{
            console.log("inside myFunc",myVar);
        }
        myFunc4();
       
    }

    console.log(myVar); 
    myFunc() //
}

myApp();

//1 check function call then check inside thing 