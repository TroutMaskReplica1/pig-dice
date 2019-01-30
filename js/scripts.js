function Player(name) {
  this.name = name;
  this.totalScore = 0;
  this.roundScore = 0;
  this.roll = 0
}

//hold function
// Player.prototype.rollDice = function() {
// var resultsFromRoll = Math.floor(6*Math.random())+1;
//   // console.log(typeof resultsFromRoll);
//   // return resultsFromRoll;
//   //this.roundScore = resultsFromRoll;
// }

Player.prototype.holdScore = function(roundScore){
  this.totalScore += roundScore;
  this.roundScore = 0;
}

Player.prototype.getRoundScore = function() {
  var resultsFromRoll = diceRoll();
  if(resultsFromRoll > 1) {
  this.roundScore += resultsFromRoll;
} else {
  this.roundScore = 0;
}
  console.log(resultsFromRoll);
}

var player1 = new Player("Jim")

function diceRoll() {
  return Math.floor(6*Math.random())+1;
}
