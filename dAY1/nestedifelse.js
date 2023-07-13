// nested if else

// wining number 19

// 19 your guess is right
// 17 too low
/// 20 too low

let winningNumber=19;
let userGuess =+prompt("guess a number")// in string 
// "12"
// prompt take string
// console.log(typeof userGuess,userGuess);

// if(userGuess===winningNumber){
//     console.log("your guess is right");
// }
// else{
//     console.log("your guess iswrong");
// }
//  tell just your number right or wrong 

if(userGuess===winningNumber){
        console.log("your guess is right");
    }
    else{
        if(userGuess<winningNumber){
        console.log("too low");}
        else{
            console.log("too high");
        }

    }