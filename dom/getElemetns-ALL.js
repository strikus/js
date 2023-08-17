// get multiple elements by getElements by class name
// by querySelectorSAll

const multelemt= document.getElementsByClassName("nav-item")
console.log(multelemt);
console.log(multelemt[2]);
// HTMLCollection(3) [li.nav-item, li.nav-item, li.nav-item]
// 0
// : 
// li.nav-item
// 1
// : 
// li.nav-item
// 2
// : 
// li.nav-item
// length
// : 
// // 3

// it is array like object but not array
const navITems= document.querySelectorAll(".nav-item")
console.log(navITems);
console.log(navITems[1]);
// give nodelist
// NodeList(3) [li.nav-item, li.nav-item, li.nav-item]
// 0: li.nav-item1: linav-item2:linav-itemlength: 3