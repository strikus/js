// undefined  // when no value initialise 
// null 

// let firstName;console.log(typeof firstName) undefined no value assigned

firstName= "kid"
console.log(typeof firstName,firstName); // string kid

// null mtlb kuch nhi =0

let myVariable= null;
console.log(myVariable); // null
myVariable= "got value"; console.log(typeof myVariable, myVariable);

console.log(typeof null); // we get object 

// it is bug in javascript why it not get fixed 


// BigInt

let myNumber = 123 
//
console.log(Number.MAX_SAFE_INTEGER);
// 9007199254740991 total value we can store
// let myBigInt = (232);
let myBigInt = BigInt(232);
let mySameNumber = 123n; // we can write n too for bigint 
// console.log(myBigInt);
console.log(myBigInt*mySameNumber);
// Cannot mix BigInt and other types, use explicit conversions