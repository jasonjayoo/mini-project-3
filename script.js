//WRITE YOUR CODE BELOW
var winner = 0;
var loser = 0;
var ties = 0;

var gameOptions = ["r", "p", "s"];

function gamePlay() {
  var playersChoice = window.prompt("Select r, p, or s:");

  if (!playersChoice) {
    return;
  }

  playersChoice = playersChoice.toLowerCase();
  // randomizing with math.floor + math.random to get ran whole number x gameOptions.length
  var index = Math.floor(Math.random() * gameOptions.length);
  var cpuChoice = gameOptions[index];

  alert("The cpu has chosen " + cpuChoice);

  // for ties
  if (playersChoice === cpuChoice) {
    ties++;
    window.alert("you've tie, sorry try again");
  } else if (
    (playersChoice === "p" && cpuChoice === "r") ||
    (playersChoice === "s" && cpuChoice === "p") ||
    (playersChoice === "r" && cpuChoice === "s")
  ) {
    winner++;
    window.alert("Congratulations!!! You're a Winner $$$");
  } else {
    loser++;
    window.alert("Better Luck Next Time :) ");
  }

  window.alert(
    "Tally \nWins: " + winner + "\nLosses:" + loser + "\nTies: " + ties
  );

  var replay = window.confirm("Do you feel lucky punk?");

  if (replay) {
    gamePlay();
  }
};

gamePlay();
