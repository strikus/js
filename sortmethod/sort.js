
// sort 
// number>string then getting sort wecan fix it


//5 ,9,1200,400,3000
// sort 5,9,400,1200,3000 ascending sort
// sort mutate the array instead others forEach map etc method

const numbers=[5,9,1200,400,3000]
numbers.sort();
// 1200 3000 400 5 9 weird sortebcause it sort by string value
// js take first number in string
//  '1200' : take '1' only
// '0':48
// '1':49
// '2':50
// '3':51
// '4':52
// '5':53
// '6':54
// '7':55
// '8':56
// '9':57

console.log(numbers);

const userNames=['harshit','abcd','SD','mohit',"nitish"]

userNames.sort();
console.log(userNames);
//  ['abcd', 'harshit', 'mohit', 'nitish']
// if der is caps so firstsort caps then small

// sort with fix 
// sort can take as callback 

const numbers1=[5,9,1200,400,3000]
numbers1.sort((a,b)=>{
    return a-b;
});
// numbers1.sort((a,b)=>a-b)
console.log(numbers1);
//  [5, 9, 400, 1200, 3000]

// how it works

//1200 400
// a-b ----> positive(>0) then put b fisrt then a (400,1200) b,a
// a-b ---> negative (<0) then put same as same a,b

// sort in decending 


const numbers2=[5,9,1200,400,3000]
numbers1.sort((a,b)=>{
    return b-a;
});
// numbers1.sort((a,b)=>b-a)
console.log(numbers1);
// [3000, 1200, 400, 9, 5]

// real world uses 
// filter hightoolow or lowtohigh

const products = [
    {productId:1,productName:"p1",Price:3500},
    {productId:2,productName:"p2",Price:5200},
    {productId:3,productName:"p3",Price:500},
    {productId:4,productName:"p4",Price:8000},
]
// lowToHigh

const lowToHigh=products.slice(0).sort((a,b)=>{
    return a.Price-b.Price

})
console.log(lowToHigh);
// sort mutate changed products
// u can clone it 

// high to low


// hightolow

const highToLow=products.slice(0).sort((a,b)=>{
    return b.Price-a.Price

})
console.log(highToLow);