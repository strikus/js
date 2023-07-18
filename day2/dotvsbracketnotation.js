const person = {
    "name":"rohit",
    age:20,
    hobbies:["singing","music","football"],
    "person asses":["car","phone"]
}

console.log(person);

// if u want to give two word key like
// person hobby 
// u can "person hobbies"
// u cant access via . notation

// console.log(person."person asses"); // invalid

console.log(person["person asses"]);

// another difference
const key = "email"
// use this above key var in key of object like "email": value 

// person.key="rohitprajapat@Outlook.in"
// console.log(person);
// {name: 'rohit', age: 20, hobbies: Array(3), person asses: Array(2), key: 'rohitprajapat@Outlook.in'}
// the name for person object key is key we wanted its value as key 

person[key]="rohit@gmail.com"
console.log(person);

// use without "" so store its value as key 