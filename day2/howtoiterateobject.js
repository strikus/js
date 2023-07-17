// how to iterate objects


const person = {
    name:"rohit"  // name is key value rohit,
    ,
    "age":22,
    hobbies:["guitar","cricket","music"]
};

//for in loop
// object.keys
for(let key in person){
    // console.log(key);// it will give 
    // name age hobbies
    // console.log(person[key])
    // it will give key's value // rohit 22 array
    // console.log(person["key"]);
    // // undefined
    console.log(`${key}: ${person[key]}`);
    console.log(key ,":",person[key]);

}


//objecy key method

console.log(typeof (Object.keys(person)));// object and give key name
console.log (Object.keys(person));// name age hobbies

let val = Array.isArray(Object.keys(person))
console.log(val); // true

for(let key of Object.keys(person)){
    console.log(person[key]);
} // will return key value pairs 