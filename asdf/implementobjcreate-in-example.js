const userMethod=
    {
        about: function () {
            return `${this.firstName}, ${this.age} years old` //
        },
        is18: function () {
            return this.age >= 18;
        },
        sing:function (){
            return "toon na lalal lala"
        }
    }
function createUser(firstName, lastName, email, age, address) {
    const user = Object.create(userMethod)
    user.firstName = firstName; // Corrected the assignment using =
    user.lastName = lastName;
    user.email = email; // Corrected the assignment using =
    user.age = age;
    user.address = address;
    return user;

}

const user1 = createUser('rohit', 'prajapat', 'berohit69@gmail.com', 23, 'my addresss');
console.log(user1.sing())
console.log(user1.firstName)
