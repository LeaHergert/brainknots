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

// margin bottom of facts divider
const hotline = document.querySelector(".hotline");
const facts = document.getElementById("facts");

const hHeight = hotline.offsetHeight;
const fHeight = facts.offsetHeight;

facts.style.marginBottom = hHeight *0.8 + "px";

const mediaQuery = window.matchMedia("(max-width: 600px)");

if (mediaQuery.matches) {
    facts.style.marginBottom = hHeight  + "px";
}


function drop(nr) {
  if (mediaQuery.matches) {
    const content = document.getElementsByClassName(".dropdown-content");
    const drop = document.querySelector("#drop" + nr);
    const child = document.getElementById(nr);
    const first = drop.firstElementChild;
    
        
    for (var i = 0; i < content.length; i++) {
        content[i].style.display = "none";
        if (content[i].style.display === "grid") {
            first.style.transform = "rotate(-90)";
            child.style.display = "grid";
        }
    }

    first.style.transform = "rotate(0)";
    // child.style.display = "grid";
}
}
