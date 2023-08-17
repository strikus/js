// const todolist= document.querySelector(".todo-list")

// todolist.innerHTML="<li> NEw Toddo</li>"// it changes whole inner  Html 
// but we want old element + new things like todo 1 with todo2
// ----------------
// todolist.innerHTML+="<li> NEw Toddo</li>"
// todolist.innerHTML+="<li> NEw 2</li>"
// console.log(todolist);
// u should not use because it render preb things to with it every time new element we add to it


// u should use when 
// want to edit full html not new changes


// we use createElement 


//document.createElement()
//append
/// prepend
// remove

const newTodoitme=document.createElement("li");
console.log(newTodoitme);

/// text create
const newTODOitemTExt=document.createTextNode("TEch studnents")
// u can also use 
// newTodoitme.textContent="tech student"
const todoList = document.querySelector(".todo-list");

newTodoitme.appendChild (newTODOitemTExt) // can use Append to
todoList.prepend(newTodoitme) 
// todoList.append(newTodoitme) 
// add with ul element
console.log(newTodoitme);

const todo= document.querySelector(".todo-list li")
todo.remove();
console.log(todo);

todoList.before(newTodoitme)// no styling
todoList.after(newTodoitme)
