// map methods

const numbers =[3,34,35,32,1];

const square = function(numbers){
    return numbers*numbers
}
const squarenumber = numbers.map(square)
console.log(squarenumber);

numbers.map(square);
// it return map make new array

const sq= numbers.map((number,index)=>
{
    return `index:${index},${number*number}`

})

console.log(sq);