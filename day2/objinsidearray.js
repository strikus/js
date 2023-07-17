// object inside array

// very useful in real world applications

const users = [
    {userId:1,firstName:"rohit",Gender:"male"},
    {userId:2,firstName:"barbie",Gender:"female"},
]

for(let user of users){
    console.log(user.userId)
    console.log(user.firstName)
    console.log(user.Gender)
}