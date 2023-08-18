// addd anyof event on this three buttons


// const firstButton=document.querySelector("#one")
const allbuttons=document.querySelectorAll(".buttons button")

// for(let button of allbuttons){
//     button.addEventListener("click",function(){
//         // console.log("fuckrd");
//         console.dir(this);
//         console.log(this.textContent);
//     })
// }

// for(let i=0;i<allbuttons.length;i++){
// allbuttons[i].addEventListener("click",function(){
//     console.log(this);
// })
// }

allbuttons.forEach(function(button){
    button.addEventListener("click",function(e){
        console.log(e);
    })
})