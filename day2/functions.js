// function like our servant do our work 
function function_name(){
    //work
    console.log("happy bday");
}
//call function
function_name();

// function twoplusfour(a, b){
//     console.log(a+b);
// }
// twoplusfour(2,4);

// function twoplusfour(a, b){
//     console.log(4+2);
// }
twoplusfour();
function twoplusfour(a, b){
    return 2+4
}
  const returnedValue=     twoplusfour();
  console.log(returnedValue);
// with argument and parameter

function sumTwo(number1,number2){
    return number1+number2
}
function sumTwo1(number1,number2){
    return number1+number2
}

const ans =sumTwo(23,23);
console.log(ans);
console.log(undefined+undefined);//Nan
// function sumTwo1(number1,number2){
//     return number1+number2
// }

// const ans1 =sumTwo1();
// console.log(ans1); // Nan

/// sum threee num

//function as a  input output three num sum
function sumThree(a,b,c){
    return a+b+c;
}

const ans3=sumThree(23,24,32);
console.log(ans3);

/// 2+3+UNDEFINED = Nan

// odd or even 
// input : 1 number ans output true 

function isEven(number){
    // if(number%2===0){
    // return true;
    // }
    // return false;
    return number%2===0;
    
}
console.log(isEven(3));


// as input string output firstchar

function firstChar(anyString){
    return anyString[0];
}
console.log(firstChar("zbc"));


// as input array ,target (num) find number return index of target if it found
// [1,5,9,27,6]

function findIndex(array,target){
    for(let i =0; i<array.length;i++){
        if(array[i]===target){
            return i
        }

    }
    return -1;
}

const myArray=[1,3,3534,3453]

const ans5= findIndex(myArray,3);

console.log(ans5);