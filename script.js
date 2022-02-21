let button1 = document.querySelector("button1");
let card = document.querySelector(".card");
let button2 = document.querySelector("button2");
let button3 = document.querySelector("button3");

button1.addEventListener("click", () => {
  console.log("clicked");
})
function show(){
  document.getElementById('image')
  .style.display="block";
  
  document.getElementById('bID')
  .style.display="none";
}

button2.addEventListener("click", () => {
  console.log("clicked");
})
function show2(){
  document.getElementById('image2')
  .style.display="block";
  
  document.getElementById('bID2')
  .style.display="none";
}

button3.addEventListener("click", () => {
  console.log("clicked");
})
function show3(){
  document.getElementById('image3')
  .style.display="block";
  
  document.getElementById('bID3')
  .style.display="none";
}

function mover(obj){
    obj.style.backgroundColor="rgb(195, 195, 196)";
}

function mout(obj){
  obj.style.backgroundColor="white";
}