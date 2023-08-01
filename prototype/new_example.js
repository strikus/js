// new keyword
// this = {}
//return this {}
// constructor function
function CreateUser(firstName, lastName, email, age, address) {
    // const user = Object.create(createUser.prototype);
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;

    return this; // not necessary to write this

}
// own method'
CreateUser.prototype.about=function () {
    return `${this.firstName}, ${this.age} years old`
}
CreateUser.prototype.is18=function(){
    return this.age >= 18;
}
CreateUser.prototype.sing = function (){

    return "toon na lalal lala"
}


const user1 = new CreateUser('rohit', 'prajapat', 'berohit69@gmail.com', 23, 'my addresss');
const user2 =new  CreateUser('james', 'kid', 'sdks@gmail.com', 23, 'my addresss');
console.log(user1.sing())
console.log(user1.about())
console.log(user2)
console.log(user2.sing())
console.log(user1)

for(let key in user1){
    console.log(key)
} // it give keys it give about sing is18 too in this
// to remove prototype methods

/// hasOwnProperty
for(let key in user1){
    if(user1.hasOwnProperty(key)){


            console.log(key)
        }


}
