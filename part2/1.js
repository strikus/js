// compilation
// code execution

//why compilation


// how javascript code executes

// what is global execution context
// what is local execution context
// closures

console.log(this)
console.log(window)
console.log(firstName)
var firstName = "rohit"
// firstName =. "rohit" code got parsed once that why it giving error before run


// 1 code get compile (compilation phase) i tokenizing/lexing 2 parsiing 3 code generation
// 1 explain
// early check error check syntax check var appropriate scope check ,determining appropriate scope of var
// parse code got parsed once that why it giving error before run
// scope before execution while parsing wheerer the variable in funcction or not
// when var in not function it is global scope var
// early code checking scope in compilation that done in thrre phase
//

// ----------------------------------------
// code execution // we know after compulation we know whrere variable in global or local
// for execute we need execution context
//  global exectuion context created // create in two phase 1/ creation phase 2/code exection phase
// pheli line execute hone se phele gec create hnga
// when gec created firstName var sare variable create get undefined and this ki value set hoti depend on where u run (browser or node)
// in browser it set to window object
//  creation phase of gec
// javascript is synchrosis and single thread lang it execute by line by line code
// in
// code exection 2 phase  log this = window object log (window) = window print // log(firstName) firstName is undfined when we entered global context var = undefined
// 4th line firstName= "rohit" now  firstName var = "rohit" in gec replace



// gEC ADDED IN STACK (2phase) creation and code exectue
// when create some thing add in Global memroy
// code exection phase

// window obj browser probide before gec create and when gec create tit equalsyto this

// and all var function all addd before execute first line
// js store var in object as key value pair
cd 