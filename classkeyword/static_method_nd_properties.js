class Animal{
    constructor(name,age) {
        this.name=name;
        this.age=age;

    }
    static aboutInfo(){

        return  "this is class function "
    }
    eat(){
        return `${this.name} is eating`;

    }
    isSupercute(){return this.age<=1}
    isCUte(){
        return true;9
    }


}

// we can accesss class function direct via class no need to call via object
const info = Animal.aboutInfo()
console.log(info)

// we have static class and properties too use in app initialise
