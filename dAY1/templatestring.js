// template string

let age =18;
let $firstName= "rohit";

// "my name is rohit and my age is 18"

let aboutMe= "my name is " +$firstName+ " and my age is "+ age;
console.log(aboutMe);

// console.log(typeof aboutMe); // string

// use of backtick ``

let aboutMe1 = `my name is ${$firstName} and my age is ${age}`

console.log(aboutMe1);