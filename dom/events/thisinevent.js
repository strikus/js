const btn = document.querySelector(".btn")
btn.addEventListener("click",()=>{
    console.log("u clicked m");
    console.log("value of this");
    console.log(this);
})
// u clicked m
// thisinevent.js:4 value of this
// thisinevent.js:5 Window {window: Window, self: Window, document: document, name: '', location: Location, …\\
// in case of arrow fn this value is ek level up means out of btn.adEvenetlistenere

// and value of this in anonymous fn or fn is same that we use to call inside btn element here

