// filter method
 

const number = [ 1,3,2,6,4,8];

// filter odd and even

const isEven = (number)=>{
    console.log(number%2!=0);
    
    return number%2===0;
}
const Even_number= number.filter(isEven)
console.log(Even_number);
// (4) [2, 6, 4, 8]

//filter ka callback function always return boolean value 

const evenNumbers =number.filter((number)=>{
    return number%2!==0;
})
console.log(evenNumbers);