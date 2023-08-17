const rootNode= document.getRootNode();
// console.log(rootNode);
// console.log(rootNode.childNodes);// HTML
// We get as nodelist can use array thing here array like object

const htmlElementNodes=rootNode.childNodes[0];
// console.log(htmlElementNodes.childNodes);NodeList(3) [head, text, body]
const headNode=htmlElementNodes.childNodes[0]
const textNode=htmlElementNodes.childNodes[1]
const bodyELementNode=htmlElementNodes.childNodes[2]

console.log(headNode);
console.log(textNode);
console.log(bodyELementNode);

// console.log(headNode.parentNode);html
console.log(headNode.parentElement);// returrn parent element 
// siblings

console.log(headNode.nextSibling.nextSibling);
const  h1 = document.querySelector("h1")
const div=h1.parentNode
const body=h1.parentNode.parentNode
console.log(body);
div.style.color="#fff000"
div.style.backgroundColor="#fff"
body.style.color="#fff"
body.style.backgroundColor="#fff12a"

// const body = document.body // direct body 




