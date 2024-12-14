const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const text3 = document.getElementById("text3");


setTimeout(() => {
    text1.style.visibility = "visible";
    
  }, 400);

setTimeout(() => {
    text1.style.borderRight = "0px";
    text2.style.visibility = "visible";
  }, 1500);

setTimeout(() => {
    text2.style.borderRight = "0px";
    text3.style.visibility = "visible";
  }, 2300);

  setTimeout(() => {
    text3.style.borderRight = "0px";
  }, 4000);