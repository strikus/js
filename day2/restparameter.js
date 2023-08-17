// rest parameters



function myFunc(a,b,...c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(c);
}

myFunc(3,4,5)// 3 argument it can hold
myFunc(3,4,3,6,7,8,9)// add other remaining in c as array use of rest parameter


function addAll(...numbers){
let total = 0
for(let number of numbers){
    total=total+number
}
return total;
}

const ans = addAll(1,2,3,4,5)
console.log(ans);
