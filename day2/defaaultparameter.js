// default parameter

function addTwo(a,b){
    if(typeof b==="undefined"){
        b=1;
    }
    return a+b;
}

const ans=addTwo(4)
// if here only one argument pass it will give a+undefined = Nan
// if we dont pass second number bydault it will pass 1
console.log(ans);


// default parameters

function addTwo1(a,b=0){
    
    
    return a+b;
}

const ans1=addTwo1(4)
console.log(ans1);