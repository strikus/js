// function inside function 

const app = ()=> {
    const myfunc =()=>{
        console.log("hello from myfunc");
    }
    const addTwo =(number1,Number2)=>number1+Number2
    const mul =(num1,num22)=>num1*num22
    console.log("inside app");
    myfunc()
    console.log(addTwo(23,23));
    console.log(mul(23,212));
}
app();