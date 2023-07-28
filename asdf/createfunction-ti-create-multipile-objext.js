// function that creates object
//add key value pair
// object ko return kregna

// function createUser(firstName, lastName, email, age, address) {
//     const user = {};
//     user.firstName = firstName; // Corrected the assignment using =
//     user.lastName = lastName;
//     user.email = email; // Corrected the assignment using =
//     user.age = age;
//     user.address = address;
//     user.about = function() {
//         return `${this.firstName}, ${this.age} years old`; //
//     };
//     user.is18 = function() {
//         return this.age >= 18;
//     };
//     return user;
// }
// fix the fn declare outside
const userMethod=
    {
        about: function () {
            return `${this.firstName}, ${this.age} years old` //
        },
        is18: function () {
            return this.age >= 18;
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
    return user;
}

const user1 = createUser('rohit', 'prajapat', 'berohit69@gmail.com', 23, 'my addresss');

//"C:\Program Files\nodejs\node.exe" C:\r\js\new-directory\asdf\createfunction-ti-create-multipile-objext.js
// {
//   firstName: 'rohit',
//   lastName: 'prajapat',
//   email: 'berohit69@gmail.com',
//   age: 23,
//   address: 'my addresss',
//   about: [Function (anonymous)],
//   is18: [Function (anonymous)]
//
// like the function is being create as new user createds so declare them individual

const check = user1.is18()
const about1= user1.about()

console.log(user1,check,about1)
// console.log(about1)
// console.log(user1);
