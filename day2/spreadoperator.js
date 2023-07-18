// spread operator

const array1= [1,2,3];
const array2=[4,5,6];

const newArray=[...array1,...array2]
const newArray1=[...array1,array2,545,45]
console.log(newArray);
console.log(newArray1);//(4) [1, 2, 3, Array(3)] array doest nt spread

// spread word
const new1 = [..."abc"]
const new2 = [..."123456789"] // "1" like it 
// const new3 = [...123456789] // will not spread give error
console.log(new1); // 'a' , 'b' ,'c'


// spread operator in object

const obj1 = {
    key1:"value1",
    key2:"value2",
    key1:"vale132" // this downside will count not above key1
}

const obj2 = {
    key4:"value4",
    key3:"value3",
    key1:"myunique"
    
}
const newobj = {...obj1,...obj2};
// badme jo spread me likha uska key1
console.log(newobj);
// add new key value pair
const newobj2= {...obj1,...obj2,key69:"valeu69"};
console.log(newobj2);


// test with string 
const newObject1= {..."abc"} 
console.log(newObject1); // 0:a 1:b 2:c
// index as key and a b c as value

// test with arrat

const newArrayobj = {...["item1","item2"]};
console.log(newArrayobj);
//{0: 'item1', 1: 'item2'}


