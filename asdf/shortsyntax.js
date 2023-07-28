// const user1={
//     firstName:"rohit",
//     age:23,
//     about:function (hobby,favMusician){
//         console.log(this.firstName,this.age,hobby,favMusician)
//     }
// }

// or

const user1={
    firstName:"rohit",
    age:23,
    about(hobby,favMusician){
        console.log(this.firstName,this.age,hobby,favMusician)
    }
}
user1.about()