// arrow function and this
const user1={
    firstName:"rohit",
    age:8,
    about:()=>{
        console.log(this)
        console.log(this.firstName,this.age)
    }
}

// user1.about(); undefined undefined
// user1.about.call(user1) undefined undefineed

// user1.about.call(user1)
// ek level up to normal function this hnbga arrow function me