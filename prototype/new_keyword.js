//new keyword

function CreateUser(firstName,age){
    this.firstName=firstName
    this.age=age;
}
CreateUser.prototype.about=function(){
    console.log(this.firstName,this.age)
}
const user1= new CreateUser(("rohit"),6)
console.log(user1)
// we CAlled above function via new keyword

// new keyword creae empty object
// this = empty object
//return this

// new keyword make direct conneection
