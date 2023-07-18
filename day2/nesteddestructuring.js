// nested destructuring

const users=[
    {userID:1,firstName:"rohit",gender:"male"},
    {userID:2,firstName:"barbie",gender:"female"},
    {userID:3,firstName:"boy",gender:"male"},
    
]
// const khasedestructure= kismedestructure;
const [user1,user2,user3]= users;

console.log(user1);
console.log(user2);
console.log(user3);
// {userID: 1, firstName: 'rohit', gender: 'male'}
// nesteddestructuring.js:13 {userID: 2, firstName: 'barbie', gender: 'female'}
// nesteddestructuring.js:14 {userID: 3, firstName: 'boy', gender: 'male'}

const [{firstName:changedName,userID}, , {gender:user3gende}]= users;
console.log(changedName,userID); // rohit 1 
 // male

 console.log(user3gende); // male

