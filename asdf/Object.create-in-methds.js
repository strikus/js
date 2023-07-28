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
    const user = {};
    user.firstName = firstName; // Corrected the assignment using =
    user.lastName = lastName;
    user.email = email; // Corrected the assignment using =
    user.age = age;
    user.address = address;
    user.about =userMethod.about
    user.is18 = userMethod.is18
    user.sing=userMethod.sing
    return user;

}

const user1 = createUser('rohit', 'prajapat', 'berohit69@gmail.com', 23, 'my addresss');
console.log(user1.sing())
// what happened when u forgot to put defined method in our object so fix it via Object create
// check part2