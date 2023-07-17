// objects reference type
//arrays are good but notsufficient
// for real world data
// objects store key value pairs
// objects dont have index

// how to create objects

const person = {
    name:"rohit"  // name is key value rohit,
    ,
    "age":22,
    hobbies:["guitar","cricket","music"]
};
// can write in string too
console.log(person)


// how to access data from objects
let name = person.name
console.log(name)
console.log(person.age); // dot notation
console.log(person["age"]); // other way  bracket notation
console.log(person.hobbies);
console.log();
// console.log(hobbies); invalid
// how to add new key value pair of object 

person.key_name = "value"

person.kid="yes"
console.log(person);

person["gender"]= "male";
person["experience"]= 3;
console.log(person);

// added in alphabetical order
// {name: 'rohit', age: 22, hobbies: Array(3), key_name: 'value', kid: 'ye