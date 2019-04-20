


var randomNumber1 = Math.random();
randomNumber1 = (randomNumber1 * 6) + 1;
randomNumber1 = Math.floor(randomNumber1);


var randomimage = "dice" + randomNumber1 + ".png";

var randimagesoucre = "images/" + randomimage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randimagesoucre);





var randomNumber2 = Math.random();
randomNumber2 = (randomNumber2 * 6) + 1;
randomNumber2 = Math.floor(randomNumber2);


var randomimage2 = "dice" + randomNumber2 + ".png";

var randimagesoucre2 = "images/" + randomimage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randimagesoucre2);



if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "player 1 wins";
}

else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "player 2 wins";
}

else{
  document.querySelector("h1").innerHTML = "Draw";
}
