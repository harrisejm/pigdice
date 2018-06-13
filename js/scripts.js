
var rollTotal = 0;
var rollTotal2 = 0;
var score = 0;
var score2 = 0;
var player1;
var player2;
var roll;

var Players = function(name, roll) {
  this.name = name;
  // this.score = score;
  // this.score2 = score2;
  this.roll = roll;
  this.round = function() {
    rollTotal += this.roll;
  }
  this.round2 = function() {
    rollTotal2 += this.roll;
  }
}

 $(document).ready(function(){

$(".start").click(function(event){
$(".showPlayerOne").show();
$(".start").hide();

});


//player 1

  $(".rollButton").click(function(event){
  event.preventDefault();

roll = Math.floor(Math.random() * 6 +1)
player1 = new Players("Eddie", roll);
player1.round()

document.getElementById("dice").innerHTML = rollTotal;
document.getElementById("roll").innerHTML = roll;

if (roll === 1) {
  rollTotal = 0;
  $(".showPlayerTwo").show();
  $(".showPlayerOne").hide();
   document.getElementById("dice").innerHTML = 0;
   document.getElementById("roll").innerHTML = 0;
  alert("ZERO!!!")
}


  });
$(".playerOneBank").click(function(event){

//player1.score = player1.score + rollTotal;
score = score + rollTotal;
rollTotal = 0;

document.getElementById("score1").innerHTML = score;
 document.getElementById("dice").innerHTML = 0;
 document.getElementById("roll").innerHTML = 0;
$(".showPlayerTwo").show();
$(".showPlayerOne").hide();
});

//player 2

$(".rollButton2").click(function(event){
event.preventDefault();

roll = Math.floor(Math.random() * 6 +1)
player2 = new Players("Derek", roll);
player2.round2()

document.getElementById("dice").innerHTML = rollTotal2;
document.getElementById("roll").innerHTML = roll;

if (roll === 1) {
rollTotal2 = 0;
$(".showPlayerOne").show();
$(".showPlayerTwo").hide();
 document.getElementById("dice").innerHTML = 0;
 document.getElementById("roll").innerHTML = 0;
alert("ZERO!!!");
}


});


$(".playerTwoBank").click(function(event){

//player2.score2 = player2.score2 + rollTotal2;
score2 = score2 + rollTotal2;
rollTotal2 = 0;

document.getElementById("score2").innerHTML = score2;
 document.getElementById("dice").innerHTML = 0;
 document.getElementById("roll").innerHTML = 0;
$(".showPlayerOne").show();
$(".showPlayerTwo").hide();
});


//document.getElementById("dice").innerHTML = "Hello";


 });
