const sectionTodo=document.querySelector(".section-todo")
// console.log(sectionTodo);
console.log(sectionTodo.classList);
// DOMTokenList(2) ['section-todo', 'container', value: 'section-todo container']0: "section-todo"1: "container"length: 2valu: "section-todo container"[[Prototype]]
 sectionTodo.classList.add('bg-dark')
 console.log(sectionTodo.classList);
 

//  sectionTodo.classList.remove("container")
 const ans=sectionTodo.classList.contains("container")
 console.log(ans);

 // toggle class

 sectionTodo.classList.toggle("bg-dark");
 sectionTodo.classList.toggle("bg-dark");

 // work with header

 const header= document.querySelector(".header")
//  console.log(header);
  console.log(header.classList);
//   DOMTokenList ['header', value: 'header']
header.classList.add('bg-dark')


// if we put bg dark above the header class so it will do not change the effect but add the class in it 
// because bg dark bg overwrte by header bg that down of it


