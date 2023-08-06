// const square=myFunction(2)
// square(3)

function myFunction(power){
    return function(number){
        return number**power
    }
}
const cube=myFunction(3)
const ans=cube(3)
console.log(ans)
// fn call hnga tb hi change krnenge power aesa nhi honga
const square=myFunction(2)
const ans2 = square(3)
console.log(ans2)

// modified functi9on



const myFunction1=power=>number=>number**power

const square1=myFunction1(2)
const ans1 = square1(3)
console.log(ans1)