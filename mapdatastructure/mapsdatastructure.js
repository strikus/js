const person = {
    firstName:"rohit",
    age:7,
    1:"one"
}
// {} inside curly braces are object literals
// keys always in string or in symbol
// key-> string
// key-> symbol
console.log(person.name)
console.log(person["firstName"]);
console.log(1)// js change it into string
//two ways
for(let key in person){
    console.log(typeof key,key)
}

// map
// store key value pair

const pers = new Map(); // created map
// console.log(pers)//Map(0) {}
// add key value pair in map

// pers.set(firstName,"harshit")// error
pers.set('firstName',"kid")
pers.set(1, "map")
// we can store int in key using map
// access map now

// console.log(pers.get("firstName"))
// print all keys
// console.log(pers.keys()) // map iterator

/// loop

for(let key of pers.keys()){
    console.log(key)
}
