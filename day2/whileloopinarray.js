// while loop in array

const fruits = ["apple","mango","banana"]

let i =0;
let fruits2=[]
while(i<fruits.length){
    fruits2.push(fruits[i].toUpperCase());
    i++;
}
console.log(fruits2);