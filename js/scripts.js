function Player(name) {
  this.name = name;
  this.totalScore = 0;
  this.roundScore = 0;
  this.roll = 0
}

//hold function
Player.prototype.holdScore = function(roundScore){
  this.totalScore += roundScore;
  this.roundScore = 0;
}

Player.prototype.getRoundScore = function(resultsFromRoll) {
  this.roundScore += resultsFromRoll

}
