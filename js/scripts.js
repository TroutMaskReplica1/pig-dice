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
  checkWin(this.totalScore);
  this.roll = resultsFromRoll;

} else {
  this.roundScore = 0;
  this.roll = resultsFromRoll;
  // roundCheck();
  // incrementRound();
}
}
checkWin(this.totalScore);

// HARD MODE LOGIC
Computer.prototype.computerHardTurn = function() {
  var dice = diceRoll();

  if (dice > 1 && this.roundScore >= 20) {
    this.roundScore += dice;
    this.holdScore();
    this.roll = dice;
    console.log("1!!!");
    checkWin(this.totalScore);
    return this.roll;

  } else if (dice > 1 && this.roundScore <= 20) {
    this.roundScore += dice;
    var die = diceRoll();
    this.roundScore += die;
    this.roll = die;
    console.log("2!!!!");
    checkWin(this.totalScore);
    return this.roll;


  } else if (dice == 1 || die == 1 || di == 1) {
    this.roundScore = 0;
    this.roll = dice;
    console.log("4!!!!");
    checkWin(this.totalScore);
    return this.roll;
  }
}



// } else if (dice > 1 && this.roundScore ) {
//   var di = diceRoll();
//   this.roundScore += dice;
//   this.holdScore();
//   this.roll = di;
//   console.log("3!!!!");
//   return this.roll;




Computer.prototype.computerTurn = function() {
  var dice = diceRoll();
  if (dice > 1) {
    this.roundScore += dice;
    var die = diceRoll();
    this.roll = dice;
    return this.roll;
    if (die > 1) {
      this.roundScore += die;
      this.holdScore();
      checkWin(this.totalScore);
      this.roll = die;
      return this.roll;
    } else {
      this.roundScore = 0;
      this.roll = dice;
      return this.roll;
    }
  } else {
    this.roundScore = 0;
    this.roll = dice;
    return this.roll;
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

function checkWin(totalScore) {
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
  return resultsFromRoll;
} else {
  this.roundScore = 0;
  this.roll = resultsFromRoll;
  roundCheck(round);
  incrementRound();
  return resultsFromRoll;
}
}

function roundCheck(round) {
  var isChecked = $("input:radio[name=radio]:checked").val();
  if (isChecked === "option2") {
    if (round % 2 !== 0) {
      $(".p1").toggle();
      $(".p2").toggle();
     return false
  } else  {
    $(".p1").toggle();
    $(".p2").toggle();
      return true;
    }
  } else if (isChecked === "option1") {
    $(".p2").hide();
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
  $("#form1").submit(function(event) {
    event.preventDefault();
    var isChecked = $("input:radio[name=radio]:checked").val();
    if (isChecked === "option2") {
      $("#form1").hide();
      $(".comp").hide();
// player UI
      $("#roll1").click(function() {
        $("#round").text("Round: " + round);
        player1.getRoundScore();
        $("#round-score").text("Round Score: " + player1.roundScore);
        $("#roll").text("Roll Value: " + player1.roll);
      });
      $("#hold1").click(function() {
        player1.holdScore();
        $("#round").text("Round: " + round);
        $("#score").text("Total Score: " + player1.totalScore);
        $("#round-score").text("Round Score: " + player1.roundScore);
      });
      $("#roll2").click(function() {
        $("#round2").text("Round: " + round);
        player2.getRoundScore();
        $("#round-score2").text("Round Score: " + player2.roundScore);
        $("#roll-2").text("Roll Value: " + player2.roll);
      });
      $("#hold2").click(function() {
        player2.holdScore();
        $("#round2").text("Round: " + round);
        $("#score2").text("Total Score: " + player2.totalScore);
        $("#round-score2").text("Round Score: " + player2.roundScore);
// Player UI
      });
      // computer UI
  } else if (isChecked === "option1") {
  $("#form1").hide();
  $(".comp").show();
    event.preventDefault();
  $("#hold1").click(function() {
    comp.computerHardTurn();
    $("#playerCom").text("Player: " + comp.name);
    $("#roundCom").text("Round: " + round);
    $("#scoreCom").text("Total Score: " + comp.totalScore);
    $("#round-scoreCom").text("Round Score: " + comp.roundScore);
    $("#rollCom").text("Roll Value: " + comp.roll);
  });
    $("#roll1").click(function() {
      $("#round").text("Round: " + round);
      player1.getRoundScore();
      $("#round-score").text("Round Score: " + player1.roundScore);
      $("#roll").text("Roll Value: " + player1.roll)
    });
    $("#hold1").click(function() {
      player1.holdScore();
      $("#round").text("Round: " + round);
      $("#score").text("Total Score: " + player1.totalScore);
      $("#round-score").text("Round Score: " + player1.roundScore);
    });
  // computer Ui
}
});
});
