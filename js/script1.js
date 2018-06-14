
var rollTotal = 0;
var rollTotal2 = 0;
var score = 0;
var score2 = 0;
var player1;
var player2;
var roll;
var test = "";
var Players = function(name, roll) {
  this.name = name;
  this.roll = roll;
  this.round = function() {
    rollTotal += this.roll;
  }
  this.round2 = function() {
    rollTotal2 += this.roll;
  }
}

 $(document).ready(function(){
///



///
$(".start").click(function(event){

$(".showPlayerOne").show();
$(".start").hide();
$(".POne").hide();
$(".PTwo").hide();
score = 0;
score2 = 0;
document.getElementById("score1").innerHTML = 0;
document.getElementById("score2").innerHTML = 0;


//player 1

var test = setInterval(aiPlayer, 1000);
var aiTurn = 0;

function aiPlayer() {

roll = Math.floor(Math.random() * 6 +1)
player1 = new Players("Eddie", roll);
player1.round()



if (aiTurn < 2) {
   aiTurn += 1;

} else {
//  $(".picOne").show();
  document.getElementById("roll").innerHTML = 0;
  aiTurn = 0;
  clearInterval(test);
  aiBank()

}

$(".picOne").hide();
$(".picTwo").hide();
$(".picThree").hide();
$(".picFour").hide();
$(".picFive").hide();
$(".picSix").hide();

document.getElementById("dice").innerHTML = rollTotal;
document.getElementById("roll").innerHTML = roll;

if (roll === 1) {
  $(".picOne").show();
  clearInterval(test);
  rollTotal = 0;
aiTurn = 0;
  $(".showPlayerTwo").show();
  $(".showPlayerOne").hide();
   document.getElementById("dice").innerHTML = 0;

  //alert("ZERO!!!")
}
else if (roll === 2){
  $(".picTwo").show();
}
else if (roll === 3){
  $(".picThree").show();
}
else if (roll === 4){
  $(".picFour").show();
}
else if (roll === 5){
  $(".picFive").show();
}
else if (roll === 6) {
  $(".picSix").show();
}


}




function aiBank() {

score = score + rollTotal;
rollTotal = 0;
aiTurn = 0;

$(".picOne").hide();
$(".picTwo").hide();
$(".picThree").hide();
$(".picFour").hide();
$(".picFive").hide();
$(".picSix").hide();
document.getElementById("score1").innerHTML = score;
 document.getElementById("dice").innerHTML = 0;
 document.getElementById("roll").innerHTML = 0;
$(".showPlayerTwo").show();
$(".showPlayerOne").hide();

if (score >= 100) {
clearInterval(test);

  $(".POne").show();
  $(".showPlayerTwo").hide();
  $(".showPlayerOne").hide();
  $(".start").show();

  $(".picOne").hide();
  $(".picTwo").hide();
  $(".picThree").hide();
  $(".picFour").hide();
  $(".picFive").hide();
  $(".picSix").hide();


}
}


//player 2



$(".rollButton2").click(function(event){
event.preventDefault();

roll = Math.floor(Math.random() * 6 +1)
player2 = new Players("Derek", roll);
player2.round2()

document.getElementById("dice").innerHTML = rollTotal2;
document.getElementById("roll").innerHTML = roll;
$(".picOne").hide();
$(".picTwo").hide();
$(".picThree").hide();
$(".picFour").hide();
$(".picFive").hide();
$(".picSix").hide();

if (roll === 1) {
rollTotal2 = 0;
test = setInterval(aiPlayer, 1000);
$(".picOne").show();
$(".showPlayerOne").show();
$(".showPlayerTwo").hide();
 document.getElementById("dice").innerHTML = 0;
 document.getElementById("roll").innerHTML = 0;
alert("ZERO!!!");
}
else if (roll === 2){
  $(".picTwo").show();
}
else if (roll === 3){
  $(".picThree").show();
}
else if (roll === 4){
  $(".picFour").show();
}
else if (roll === 5){
  $(".picFive").show();
}
else if (roll === 6){
  $(".picSix").show();
}
});

$(".playerTwoBank").click(function(event){
score2 = score2 + rollTotal2;
rollTotal2 = 0;

test = setInterval(aiPlayer, 1000);
$(".picOne").hide();
$(".picTwo").hide();
$(".picThree").hide();
$(".picFour").hide();
$(".picFive").hide();
$(".picSix").hide();
document.getElementById("score2").innerHTML = score2;
 document.getElementById("dice").innerHTML = 0;
 document.getElementById("roll").innerHTML = 0;
$(".showPlayerOne").show();
$(".showPlayerTwo").hide();

if (score2 >= 100) {
  clearInterval(test);
  $(".PTwo").show();
  $(".showPlayerTwo").hide();
  $(".showPlayerOne").hide();
  $(".start").show();

  $(".picOne").hide();
  $(".picTwo").hide();
  $(".picThree").hide();
  $(".picFour").hide();
  $(".picFive").hide();
  $(".picSix").hide();
}
});

});

 });
