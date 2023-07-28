// dont do this mistake


const user1={
    firstName:"rohit",
    age:234,
    about:function(){
        console.log(this.firstName, this.age)
    }

}

const user2={
    firstName: "harshit",
    age: 23,
}

// const myFunc=user1.about undefined undefined
const myFunc= user1.about.bind(user2)
myFunc();