// fill method

// value,start ,end
// it changed our array
// in array of length10 no should be of -1 and length to be 10 u can use fill method
const myNewArray= new Array(10).fill(-1) // new used to created a new array

console.log(myNewArray)

//2 ex
// kis value ko fill krna kis index se kha tk vo vaha tk jayenga but usse ek element tk work krenga
const myArray = [1,2,3,4,5,6,7,8,9];
myArray.fill(4,1,5)
console.log(myArray)