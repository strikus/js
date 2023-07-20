// splice method
// start , delete ,insert
// array ke bich me add or delete something
// modify original array
const myArray= ['item1','item2','item3']
// kuch delete krteh
// it return what we deleted
// myArray.splice(startingindex,howmuchelementtodelete,what to insert)
const deletedItem=myArray.splice(1,1)
// myArray.splice(1,2)
console.log(myArray)

console.log(deletedItem)
// insert

myArray.splice(1,0,'item inserted')
console.log(myArray)

///insert delete at same time

const myNewArray=['item1','item2','item3']

myNewArray.splice(1,2,'item2again','item3again')
console.log(myNewArray)
