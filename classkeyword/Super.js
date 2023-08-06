// Super

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
class Dog extends Animal{
    // Super() Animal me to mila nhi to ab constructor banan pdega Super keyword use for base parameter constructor jo name age de dnega
    // Super base class ka parameter dena inherited class ko
    constructor(name,age,Speed) {
        super(name,age);
        this.Speed=Speed;

    }
    run(){
        return` ${this.name} is running at ${this.Speed} kmph`
    }
    // animal ke pass apna eat h but modified eat chahie
    eat(){
        return`modified et:: ${this.name} is eating`
    }
    // sbse phele Dog class me dekhnga then base class

}
// object instance
const tommy = new Dog("tommy",3,40) // we added third argument too in class Animal only two parameter defined
// we use super in Dog inherited class
console.log(tommy)
console.log(tommy.run())
console.log(tommy.eat())
