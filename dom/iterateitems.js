// get mutiple elements using getElements by class name
// get multiple elemtns items using query selectorALl
// array like object ---> indexing length property
// const navitems= document.getElementsByClassName("nav-item")// 
// it will not work on anchor tag because we using it on nav item tag so 
let navitems= document.getElementsByTagName("a")
// console.log(navitems);
//HTML collection
// we cant use forEach method to iterate it 

// simple for loop 
// for(let i=0;i<navitems.length;i++){
   
//     const navitem= navitems[i]
//     navitem.style.background="#ff0";
//     navitem.style.color="green"
// }

// for of loop
// for (let item of navitems){
//     item.style.background="#ff0";
//     item.style.color="blue"
// }

// for each method we have to change this into array
// html collection to array
// navitems=Array.from(navitems);
// console.log(Array.isArray(navitems));
//  navitems.forEach((navitem) => {
//     navitem.style.background="#ff0";
//     navitem.style.color="green"
//  });


 // nodelist from queryselectorAll

 let navItemsss=document.querySelectorAll("a"); // direct tag
 console.log(navItemsss);

 // for loop
  
// for(let i=0;i<navItemsss.length;i++){
   
//     const navitem= navItemsss[i]
//     navitem.style.background="#ff0";
//     navitem.style.color="red"
// }\\

// for of loop
// for (let item of navItemsss){
//     item.style.background="#ff0";
//     item.style.color="blue"
// }\

// for each m,ethod

navItemsss=Array.from(navitems);
console.log(Array.isArray(navItemsss));
 navItemsss.forEach((navitem) => {
    navitem.style.background="#ff0";
    navitem.style.color="red"
 });
 