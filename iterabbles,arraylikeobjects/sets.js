//sets (it is iterable)
// store data
// sets also have its owm methods
//  no index based access
// Order is not guaranteed
// unque items only (no duplicates allowed a)

// we make normal array as

const number = [1,2,3]
// i want to store via set

// u have to use new set() for declare
// add iterabled in ()
const numbers = new Set([1,2,3])
// can addd string
const numbers1 = new Set([1,2,,2,3])//Set(4) { 1, 2, undefined, 3 }

console.log(numbers)
// output
// Set(3) { 1, 2, 3 }
// cant store duplicates cant add like 1 moretimes

// console.log(numbers[2]) // undefined
// order also not fixed 2 1 3 can also there


// ex

const numb=new Set();
numb.add(1);
numb.add(3);
numb.add(5);
numb.add(6);
numb.add(["item2","iterksddf"]);
numb.add(["item2","iterksddf"]); // this can addsecond time because address is new
numb.add("item2");
// check whether numb contain 1 or not
if(numb.has(1)){
    console.log('1 is present')
}
else{
    console.log("not present")
}
    QAW
console.log(numb)

// it is iterable  we can use for of

for(let num of numb){
    console.log(num)
}
// we know ek value ek hi baar ati h so we use in ids

// const ids = new Set();
const myArray = [1,2,4,4,5,5,6]
// i want unique num
const uniqueelements = new Set(myArray);
console.log(uniqueelements)
//Set(5) { 1, 2, 4, 5, 6 }
// cant use length element here
console.log(uniqueelements.size)// valid
console.log(uniqueelements.length)// undefined
console.log(myArray)// not modified

// find length

let length = 0;
for(let element of uniqueelements){
    length++
}
console.log(length)//5
