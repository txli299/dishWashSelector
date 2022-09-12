document.querySelector("button").addEventListener("click",handleClick);
function handleClick(){

  var randomNumber1 = Math.floor(Math.random()*6)+1;
  var randomPng1 = "images/dice"+randomNumber1 + ".png";
  var randomNumber2 = Math.floor(Math.random()*6)+1;
  var randomPng2 = "images/dice"+randomNumber2 + ".png";

  document.querySelectorAll("img")[0].setAttribute("src",randomPng1);
  document.querySelectorAll("img")[1].setAttribute("src",randomPng2);

  if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Yiui washes the dishes!";
  }else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Tx washes the dishes!";
  }else{
    document.querySelector("h1").innerHTML = "Roll again!";
  }
  document.querySelector("button").innerText = "Roll Again!";
}
