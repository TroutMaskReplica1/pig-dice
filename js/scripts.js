// start computer logic
function Computer(name) {
  this.name = name;
  this.totalScore = 0;
  this.roundScore = 0;
  this.roll = 0;
}

Computer.prototype.holdScore = function(){
  this.totalScore += this.roundScore;
  this.roundScore = 0;
  // roundCheck();
  // incrementRound();
}

Computer.prototype.getRoundScore = function() {
  var resultsFromRoll = diceRoll();
  if(resultsFromRoll > 1) {
  this.roundScore += resultsFromRoll;
  checkWin(this.totalScore,this.roundScore);
  this.roll = resultsFromRoll;

} else {
  this.roundScore = 0;
  this.roll = resultsFromRoll;
  // roundCheck();
  // incrementRound();
}
}
checkWin(this.totalScore);

Computer.prototype.computerTurn = function() {
  var dice = diceRoll();
  if (dice > 1) {
    this.roundScore += dice;
    var die = diceRoll();
    if (die > 1) {
      this.roundScore += die;
      this.holdScore();
    } else {
      this.roundScore = 0;
    }
  } else {
    this.roundScore = 0;
  }
}

var comp = new Computer("mechapaul");

function roundCheck(round) {
  if (round % 2 !== 0) {
    $(".p1").toggle();
    $(".p2").toggle();
   return false
   console.log(check + " if statement")
} else  {
  $(".p1").toggle();
  $(".p2").toggle();
    return true;
    console.log(check + " else statement");
  }
}

function diceRoll() {
  return Math.floor(6*Math.random())+1;
}

function checkWin(totalScore,roundScore) {
  if (totalScore >= 100) {
    alert("WINNER WINNER CHICKEN DINNER");
  }
}

function incrementRound() {
  round += 1;
}

//end computer logic

// start player logic
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
  this.roll = resultsFromRoll;

} else {
  this.roundScore = 0;
  this.roll = resultsFromRoll;
  roundCheck();
  incrementRound();
}
}

function roundCheck(round) {
  if (round % 2 !== 0) {
    $(".p1").toggle();
    $(".p2").toggle();
   return false
   console.log(check + " if statement")
} else  {
  $(".p1").toggle();
  $(".p2").toggle();
    return true;
    console.log(check + " else statement");
  }
}

var player1 = new Player("Jim");
var player2 = new Player("Paul");

function diceRoll() {
  return Math.floor(6*Math.random())+1;
}

function checkWin(totalScore,roundScore) {
  if (totalScore >= 100) {
    alert("WINNER WINNER CHICKEN DINNER");
  }
}

function incrementRound() {
  round += 1;
}

 // UI logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault()
    var isChecked = $("input:radio[name=radio]:checked").val();
    if (isChecked === "option2") {
      $("form").hide();



      $("#roll1").click(function() {
        $("#round").text("Round: " + round)
        player1.getRoundScore();
        $("#round-score").text("Round Score: " + player1.roundScore);
        $("#roll").text("Roll Value: " + player1.roll)
      });
      $("#hold1").click(function() {
        player1.holdScore();
        $("#round").text("Round: " + round)
        $("#score").text("Total Score: " + player1.totalScore);
        $("#round-score").text("Round Score: " + player1.roundScore);
      });
      $("#roll2").click(function() {
        $("#round2").text("Round: " + round)
        player2.getRoundScore();
        $("#round-score2").text("Round Score: " + player2.roundScore);
        $("#roll-2").text("Roll Value: " + player2.roll)
      });
      $("#hold2").click(function() {
        player2.holdScore();
        $("#round2").text("Round: " + round)
        $("#score2").text("Total Score: " + player2.totalScore);
        $("#round-score2").text("Round Score: " + player2.roundScore);
      });
  };
});
});
