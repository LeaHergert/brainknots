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

function drop(nr) {
  if (mediaQuery.matches) {
    const content = document.querySelector(".dropdown-content");
    const drop = document.querySelector("#drop" + nr);
    const child = document.getElementById(nr);
    const first = drop.firstElementChild;
    if (content.style.display ==="grid"){
        content.style.display = "none";
        first.style.transform = "rotate(-90)";
        child.style.display = "grid";
    } else{
        first.style.transform = "rotate(0)";
        // child.style.display = "grid";
    }
  }
}
