// call

// function hello(){
//     console.log("hello")
// }
// // hello();
// hello.call();
// // call apply blind

const user1={
    firstName:"rohit",
    age:23,
    about:function (hobby,favMusician){
        console.log(this.firstName,this.age,hobby,favMusician)
    }
}
const user2={
    firstName:"rohit",
    age:23,

}
const user3={
    firstName:"rohit",
    age:23,

}
// user1.about(); rohit 23
// about use krna h user 2 ke liye  without copy user1 method borrow

user1.about.call(user2)
// user1.about.call(user3,"guitar","republic") rohit 23 guitar republic
// user1.about.call() undefined undefined undeined
// we define the this in call ()




