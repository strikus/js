// innerHtml
// things inside a main classs
const headline = document.querySelector(".headline")
console.log(headline.innerHTML);// will give div.headline give innerhtml property too
/* <h2 id="main-heading">
Manage your tasks <span style="display: none">Hello</span>
</h2>
<button class="btn btn-headline">Learn More</button>
// <h1 id="main-heading1">Hello, World!</h1> */

headline.innerHTML="<h1>Inner html changed</h1>"
// headline.innerHTML="<button class=btn> learn more</button>"
headline.innerHTML="<button class=\"btn\"> learn more</button>"
console.log(headline.innerHTML);
// \"---------------->"
