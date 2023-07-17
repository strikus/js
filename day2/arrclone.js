// how to clone array

// how to concatenate two arrays

let array1=["item1","item2"];
// let array2=array1;
// // let array2=["item1","item2"];\

// let array2=[].concat(array1);
// let array2=array1.concat("item3");
// let array2=array1.concat();

// let array2 = array1.slice(0); // 0 to end index start 

// array1.push("item3");
// console.log(array1);
// console.log(array2);

// new way spread ooperator

// let array2 =[...array1];

// array1.push("item3");
// console.log(array1===array2);
// console.log(array1);
// console.log(array2);


// add more new elements in array 

let array2 = array1.slice().concat(["item4","item5"]);
// let array2= [].concat(array1,["item3","ierjef"])
// let array2 = [...array1,"awew","ssdsd"]
// let oneMOrearray = ["new ","sddd"]
// let array2= [...array1,...oneMOrearray]
console.log(array2);
console.log(array1);