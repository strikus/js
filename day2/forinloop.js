// for in loop

const fruits =["apple","banana","grapes","cheerry"]
const fruits2=[];

for(let index in fruits){
    // console.log(fruits[index]);
    fruits2.push(fruits[index])
    console.log(fruits2);
    // console.log(index);// 0 then 1 then 2then 3
}
console.log(fruits2);
// for in loop give index it gives index in iteration we csn print rthem line by line 