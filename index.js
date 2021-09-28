var rnd1= Math.floor(Math.random()*6)+1;

var rndSrc = "images/dice"+rnd1+".png";

document.querySelectorAll("img")[0].setAttribute("src",rndSrc);

var rnd2= Math.floor(Math.random()*6)+1;

var rndSrc2 = "images/dice"+rnd2+".png";

document.querySelectorAll("img")[1].setAttribute("src",rndSrc2);

if(rnd1>rnd2)
{
  document.querySelector("h1").innerHTML="Player 1 wins✌";
}
else if(rnd1<rnd2){
document.querySelector("h1").innerHTML="Player 2 wins✌";
}
else{
  document.querySelector("h1").innerHTML="Draw🙏";
}
