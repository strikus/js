class Animal{
    constructor(name,age) {
        this.name=name;
        this.age=age;

    }
    eat(){
        return `${this.name} is eating`;

    }
    isSupercute(){return this.age<=1}
    isCUte(){
        return true;
    }
}

//new keyword use for class constructor call

// const animall= new Animal("tom",2)
// console.log(animall)
// console.log(animall.eat())
// console.log(animall.isSupercute())

//cat class bnani h ab
class Dog{
    constructor(name,age) {
        this.name=name;
        this.age=age;

    }
    eat(){
        return `${this.name} is eating`;

    }
    isSupercute(){return this.age<=1}
    isCUte(){
        return true;
    }
}
// make obj using dog class
const tommy= new Dog("tommy",3) // object ko instance bhi bolte h

console.log(tommy)
console.log(tommy.isSupercute())

// we made his dog classs same as animal
// if we want to create dog class from animal class
//

// we use extend

class Cat extends Animal{
    // Cat is subclass of ANimal
    // by extending base parent class

    }

const moew = new Cat("meow",23)
console.log(moew)