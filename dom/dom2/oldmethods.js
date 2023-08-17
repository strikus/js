// old methods to support poor IE
// appendChild
// insertBefore
// replaceChild
// removeChild

const ul= document.querySelector(".todo-list")
const li=document.createElement("li")
const referncenode=document.querySelector(".kid")
li.textContent="hi gyuys"
ul.appendChild(li)
ul.insertBefore(li,referncenode)
ul.replaceChild(li,referncenode)