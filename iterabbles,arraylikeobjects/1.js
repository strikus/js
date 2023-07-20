// iterables
//jispe hum for of looop laga skein
/// string , array are iterable
const firstName="Harshit";
for(let char of firstName){
    console.log(char);}
// }
// output
//     H
    // a
    // r
    // s
    // h
    // i
    // t
//
const array= ["item1","item2","item3"]
for (let item of array){
    console.log(item)
}
// output
// item1
// item2
// item3

// object is not iterable
// const users = {'key1':'value1','key2':'item2','key3':"item3"};
// for (let user of users){
//     console.log(user)
// }
// : users is not iterable
//
// array like object
// jinke pass length property hoti hai
// aur jinkko hum index se access kar skte hai
// example '  -- "string"

const firstName1= 'harshit';
console.log(firstName1.length)
console.log(firstName1[2])