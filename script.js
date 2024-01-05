
// Line through "explain your" 
var explainSpan = document.querySelector(".explain span");
var explain = document.querySelector(".explain");
var explainSpan2 = document.querySelector(".df span");
var explain2 = document.querySelector(".df");
var spanHeight = explainSpan.offsetHeight;
var spanHeight2 = explainSpan2.offsetHeight;

var explainHeight = spanHeight/2 ;
var explainHeight2 = spanHeight2/2 ;
document.querySelector(".explain").style.height = explainHeight + "px";
document.querySelector(".df").style.height = explainHeight2 + "px";




