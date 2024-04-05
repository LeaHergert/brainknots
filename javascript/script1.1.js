// Line through "explain your"
const explainSpan = document.querySelector(".explain span");
const explain = document.querySelector(".explain");
const explainSpan2 = document.querySelector(".df span");
const explain2 = document.querySelector(".df");
const spanHeight = explainSpan.offsetHeight;
const spanHeight2 = explainSpan2.offsetHeight;

const explainHeight = spanHeight / 2;
const explainHeight2 = spanHeight2 / 2;
document.querySelector(".explain").style.height = explainHeight + "px";
document.querySelector(".df").style.height = explainHeight2 + "px";
document.querySelector(".df").style.height = explainHeight2 + "px";

// margin bottom of facts divider
const hotline = document.querySelector(".hotline");
const facts = document.getElementById("facts");

const hHeight = hotline.offsetHeight;
const fHeight = facts.offsetHeight;

facts.style.marginBottom = hHeight * 0.8 + "px";

const mediaQuery = window.matchMedia("(max-width: 800px)");

if (mediaQuery.matches) {
  facts.style.marginBottom = hHeight + "px";
}


function drop(nr) {
  if (mediaQuery.matches) {
    const str = nr.toString();
    // Select the elements by class name instead of id
    const svg = document.querySelector(".svg" + str);
    const child = document.querySelector(".dropdown-content.dropdown-content" + str);
    // Use the classList property to add or remove classes
    svg.classList.toggle("rotate");
    child.classList.toggle("display");
    // Use the innerHTML property to get the inner HTML of the elements
    console.log("child: " + child.classList);
    console.log("svg: " + svg.classList);
  }
}
// function drop(nr) {
//   if (mediaQuery.matches) {
//     const str = nr.toString();
//     // Select the svg element by its class name instead of id
//     const svg = document.querySelector(".svg." + str);
//     const child = document.querySelector(".dropdown-content." + str);
//     // Use the transform attribute to rotate the svg element by 45 degrees around its center
//     svg.setAttribute("transform", "rotate(45, 50, 50)");
//     child.classList.toggle("display");
//     // Use the innerHTML property to get the inner HTML of the elements
//     console.log("child: " + child.innerHTML);
//     console.log("svg: " + svg.innerHTML);
//   }
// }



  

