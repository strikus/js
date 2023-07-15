// for loop in array
 // how to print array by individual
let fruits = ["apple","grapes","orange","banana"]

console.log(fruits.length);
console.log(fruits[fruits.length-1]);

// for(i=0;i<=fruits.length-1;i++){
//     console.log(fruits[i]);
// }

// i want fruits in uppercase 
let fruituppcase=[] ;
for(i=0;i<=fruits.length-1;i++){
   fruituppcase.push(fruits[i].toUpperCase())
}

console.log(fruituppcase);