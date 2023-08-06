/// tedious to first create function then methods prototype and call

// class
// it is fake class
class CreateUser{
    constructor(firstName, lastName, email, age, address) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
        // return object auto
    }
    about(){
        return `${this.firstName}, ${this.age} years old`

    }
    is18(){
        return this.age >= 18;
}
  sing(){
      return "toon na lalal lala"
  }


}
    // const user = Object.create(createUser.prototype);


// own method'



const user1 = new CreateUser('rohit', 'prajapat', 'berohit69@gmail.com', 23, 'my addresss');
const user2 =new  CreateUser('james', 'kid', 'sdks@gmail.com', 23, 'my addresss');
console.log(user1.sing())
console.log(user1.about())
console.log(user2)
console.log(user2.sing())
console.log(user1)
console.log(Object.getPrototypeOf((user1)))