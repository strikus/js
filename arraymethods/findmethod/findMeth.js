// find method
// take input callbaack function

const myArray=["hello", "cat","dog","lion"]
// pass hello cat dog lion // first occurence it will return jiski length 3 h
function isLenght3(string){
    return string.length===3;

}

const ans=myArray.find(isLenght3)
// const ans1=isLenght3("cat") // true
console.log(ans);
// console.log(ans1);
// realistic ex

const users =[
    {userID:1, userName:"rohit"},
    {userID:2, userName:"harshit"},
    {userID:3, userName:"jam"},
    {userID:4, userName:"afraid"},
    {userID:5, userName:"farewell"}
    ];
const myUser=users.find((user)=>user.userID===3);
console.log(myUser)


//if u ahve one stament return keywork use not imp