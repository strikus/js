function about(hobby,favMusician) {
    console.log(this.firstName, this.age, hobby, favMusician)
}
    const user1={
        firstName:"rohit",
        age:234

    }

    const user2={
    firstName: "harshit",
        age: 23,
    }

    const myFunc=about.bind(user2,"hockey","golf")
myFunc();
// called about function in user2 as this and some other arguments

