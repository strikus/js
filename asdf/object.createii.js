//
const obj1={
    key1:"value1",
    key2:"value2"
}
// const obj2={
//     key3:"value3"
// }

// console.log(obj2.key1 undefined
// key1 cant reached by obj2
// const obj2={}
// another way to create empty obj

const obj2= Object.create(obj1); // {} empty object
obj2.key3="value3"
// obj2.key2="unique" this value obj2 will look here then in obj1
console.log(obj2.key2)// we can access the obj1 key value pair in obj2

// how
//__proto__  [[prototype]]

console.log(obj2.key1)
console.log(obj2)
// will give back obj2 and proto obj1 key value pairs
// js ko jo chiz apne na milti js apne kribi jgh jakechizl eta\


