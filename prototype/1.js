// what is prototype
// function + object
// javascript function = function + object
function hello(){
    console.log("hello world ")
}
// console.log(hello.name);

// you can add your own properties
// hello.myOwnProperty= "very unique value"
// console.log(hello.myOwnProperty)
// name property --> tell function name

// function provides more usefull prperties

// call apply bind method bhi provide fucntion
// function dete free space means
// actual me aesa kuch nhi hota  free sspace mai empty object {} ko bol raha hai sirf samjane ki liye appoko

// {} empty object == prototype
// muft ka space is prototype ek trh ka object use ke liye h
// agr koi key vcalue ad krna h to add krskte h
// type of constructor
// online provide function type prototype property

if(hello.prototype){
    console.log("present")
}
else{
    console.log("not presernt")
}
hello.prototype.abc="ld"
console.log(hello.prototype.abc)

