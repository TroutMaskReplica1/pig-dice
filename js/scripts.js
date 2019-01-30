var round = 0;

function Player(name) {
  this.name = name;
  this.totalScore = 0;
  this.roundScore = 0;
  this.roll = 0;
}


Player.prototype.holdScore = function(){
  this.totalScore += this.roundScore;
  this.roundScore = 0;
  roundCheck();
  incrementRound();
}

Player.prototype.getRoundScore = function() {
  var resultsFromRoll = diceRoll();
  if(resultsFromRoll > 1) {
  this.roundScore += resultsFromRoll;
  checkWin(this.totalScore,this.roundScore);
} else {
  this.roundScore = 0;
  roundCheck();
  incrementRound();
}
  console.log(resultsFromRoll);
}

function roundCheck(round) {
  if (round % 2 !== 0) {
    var check = false;
    alert("false")
  } else  {
    check = true;
    console.log(check);
    alert("true")
  }
}

var player1 = new Player("Jim");
var player2 = new Player("Paul");

function diceRoll() {
  return Math.floor(6*Math.random())+1;
}

function checkWin(totalScore,roundScore) {
  if (totalScore >= 20) {  //change to 100 later
    alert("WINNER WINNER CHICKEN DINNER");
  }
}

function incrementRound() {
  round += 1;
}
