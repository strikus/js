// find method


const myArray=["hello", "cat","dog","lion"]

function isLenght3(string){
    return string.length===3;

}

const ans=myArray.find(isLenght3)
// const ans1=isLenght3("cat") // true
console.log(ans);
// console.log(ans1);