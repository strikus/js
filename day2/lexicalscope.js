// lexical scope


function myApp(){
    let myVar=49;

    const myFunc=()=>{
        let myVar=23;
        console.log(myVar);
    }
    myFunc()
}

myApp()