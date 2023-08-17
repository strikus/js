const ul=document.querySelector(".todo-list")
const listiTEMS=document.getElementsByTagName("li")
const listi=document.createElement("li")
listi.textContent="new iem dfs"

ul.append(listi)
console.log(listiTEMS);


// we have added a new list by js but in console we can se in node list only 4 li
// NodeList(4) [li, li, li, li]
// it is static list