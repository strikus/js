// getter setter

class Person{
    constructor(firstName,lastName,age) {
        this.firstName=firstName
        this.lastName=lastName
        this.age=age
// after this the name will show in result
    }
get fullName(){
        return `${this.firstName} ${this.lastName}`
}
// setName(firstName,lastName){
//     this.firstName=firstName
//     this.lastName=lastName
// }
    // get full name in split
    set fullName(fullName){

   const [firstName,lastName]= fullName.split(" ")
        this.firstName=firstName
        this.lastName=lastName
    }
}

const Person1= new Person("rohit","sdsds", 19)
// console.log(Person1)
// console.log(Person1.fullName())
// i want to use as property dont want to call
// console.log(Person1.firstName) isse pura name chahitew
// console.log(Person1.fullName)    [Function: fullName]
// use get keyword before function
// console.log(Person1.fullName)

// console.log(Person1.firstName)
// console.log(Person1.lastName)
// // Person1.setName("mohit","kfi")
// console.log(Person1.firstName)
// console.log(Person1.lastName)


// direct way
// Person1.firstName="mohit"
// Person1.lastName="kif"

// as we change property differenty we want it to change full name in one line
Person1.fullName= "rohit boy"
console.log(Person1)
console.log(Person1.fullName)
