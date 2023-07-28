// apply
function about(hobby,favMusician) {
    console.log(this.firstName, this.age, hobby, favMusician)
}
const user1={
    firstName:"rohit",
    age:23,

    }
const user2={
    firstName:"hjasdg",
    age:923,

}
// apply
about.apply(user1,["guitar","bach"])

