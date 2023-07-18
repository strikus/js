// function returning function

function myFunc(){
    function hello(){
        return("hello world");
    }
    return hello// can return anything array number string etc

}

const ans=myFunc();
console.log(ans());


// when u giving function as input (callback) or return funnction we call higher orderfunction

function myFunc(){
    return function(){
        return "hello world"
    }
    // can return anything array number string etc

}

const ans1=myFunc();
console.log(ans1());