function myFunction() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


let v = document.getElementsByClassName("faqs-answers");
let y = document.getElementsByClassName("div1");
let z = document.getElementsByClassName("div2");


function showAnswer() {
  v.classList.remove("hide-answer"); 
  y.classList.add("hide");
  z.classList.remove("hide");
}


function hideAnswer() {
  v.classList.add("hide-answer"); 
  y.classList.remove("hide");
  z.classList.add("hide");
}