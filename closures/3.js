// application of closure

// func ki call krenge fn return krenga jo myfunc ko store krenge usko call krenga  agr usko hi dusri baar call krenge to track krna
  function func(){
      let counter=0;
    return function(){

        if(counter<1){
            console.log("you called me")
            counter++
        }
        else{
            console.log("mai already call ho chuka hu ")
        }
    }
  }
  const kid= func()
kid();
kid();

// how it works
const myFunc2=func()
myFunc2()
myFunc2()
// you called me
// mai already call ho chuka hu
// you called me
// mai already call ho chuka hu

