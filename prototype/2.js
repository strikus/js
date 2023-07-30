// use prototype

function createUser(firstName, lastName, email, age, address) {
    const user = Object.create(createUser.prototype);
    user.firstName = firstName; // Corrected the assignment using =
    user.lastName = lastName;
    user.email = email; // Corrected the assignment using =
    user.age = age;
    user.address = address;

    return user;

}
// own method'
createUser.prototype.about=function () {
    return `${this.firstName}, ${this.age} years old`
}
createUser.prototype.is18=function(){
    return this.age >= 18;
}
createUser.prototype.sing = function (){

    return "toon na lalal lala"
}


const user1 = createUser('rohit', 'prajapat', 'berohit69@gmail.com', 23, 'my addresss');
const user2 = createUser('james', 'kid', 'sdks@gmail.com', 23, 'my addresss');
console.log(user1.sing())
console.log(user1.about())
console.log(user2)
console.log(user2.sing())
console.log(user1)

// prototype simple object
// proto is refrence h jo object.create me hhnga