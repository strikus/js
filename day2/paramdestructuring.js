// param destructuring


// used with object in react too much

const person={
    firstName:"rohit",
    gender:"male"
}
// function personDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
//     console.log(obj.age);// undefined
// }
function personDetails({firstName,gender}) // we know it getting person object so we can destructure it
{
    console.log(firstName);
    console.log(gender);
    // console.log(age);// undefined/
}
personDetails(person);
