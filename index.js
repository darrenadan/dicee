//  <img src ="images/dice6.png" alt ="dice6" />

//dice1
var randomNumber1 = Math.floor(Math.random()*6)+1;
var imgSrc1 ="images/dice"  +  randomNumber1  +  ".png"; // images/dice1-6.png
document.querySelectorAll("img")[0].setAttribute("src", imgSrc1);

//dice2
var randomNumber2 = Math.floor(Math.random()*6)+1;
var imgSrc2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", imgSrc2);

//conditional statement
if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 wins!";
}
else if (randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = " Player 2 wins!";
}
else {
  document.querySelector("h1").innerHTML = " It's a DRAW!";
}
