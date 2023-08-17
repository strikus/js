// get set attributes

// href id placeholder type are attributes 
 const link = document.querySelector("a")
 console.log(link);
console.log(link.getAttribute("href").slice(1));

// a
// get_set.js:6 #home

// get Attribute use to give attribute set name like href=#home 

const input = document.querySelector(".form-todo input")
console.log(input.getAttribute("type"));//text

// set atrribute value 

input.setAttribute("type", "kid")
console.log(input.getAttribute("type"));// kid