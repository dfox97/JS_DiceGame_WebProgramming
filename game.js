//global variables
var totalScore = 0,
  RoundNum = 0;

//RESETS GAME
function newGame() {
  //add these so total gets reset to zero if it doesnt then it will continue adding
  (totalScore = 0), (RoundNum = 0);
  document.getElementById("TotalScore").innerHTML = 0;
  document.getElementById("roundScore").innerHTML = 0;
  document.getElementById("roundNum").innerHTML = 0;
  document.getElementById("dieContainer").innerHTML = 0;
  document.getElementById("alert").style.visibility = "hidden";
}

//generates 5 random numbers between 1 and 6
function rollDice() {
  document.getElementById("alert").style.visibility = "visible";
  numDice = document.getElementById("diceNum").value;
  var container = document.getElementById("dieContainer");
  var diceRoll = [];
  var roundPoints = 0;

  if (numDice < 3 || numDice > 6) {
    window.alert("Please enter 3 to 6 dice");
    return (roundPoints = 0), (RoundNum = 0);
  } else {
    container.innerHTML = ""; //clears the old dice rolls
    for (var i = 0; i < numDice; i++) {
      dice = Math.floor(Math.random() * 6 + 1);
      diceRoll.push(dice);
      roundPoints += dice;
    }
  }

  //updating images depending on number of dice slected
  if (numDice >= 3) {
    RoundNum += 1;
    document.getElementById("roundNum").innerHTML = RoundNum;

    displayDice(["dice", "dice1", "dice2"], diceRoll);
    hideDice(["dice3", "dice4", "dice5"]);
    if (numDice >= 4) {
      addDice("dice3", diceRoll[3]);
      hideDice(["dice4", "dice5"]);
    }
    if (numDice >= 5) {
      addDice("dice4", diceRoll[4]);
      hideDice(["dice5"]);
    }
    if (numDice == 6) addDice("dice5", diceRoll[5]);
  }

  if (identical(diceRoll) == true) scores(60, roundPoints, "Identical!!!");

  if (identicalMinusOne(diceRoll) == true)
    scores(40, roundPoints, "40 points !!");

  if (isStraight(diceRoll) == true) scores(20, roundPoints, "Straight");

  if (allUniqueValues(diceRoll) == true) scores(0, roundPoints, "Unique!");

  if (otherOutcome(diceRoll) == true) scores(0, roundPoints, "hidden");

  totalScore += roundPoints;
  document.getElementById("TotalScore").innerHTML = totalScore;
}

/************************************************** */
//Checking  All N dice have the same value
/************************************************** */
function identical(array) {
  var first = array[0];
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== first) {
      return false;
    }
  }
  return true;
}

/************************************************** */
//N - 1 but not N dice have the same value
/************************************************** */

//Counts thee number of elements in array and if the counter is equal the array return true
function identicalMinusOne(array) {
  array.sort();
  var array_increment = null;
  var count = 0;
  for (var i = 0; i <= array.length; i++) {
    if (array[i] != array_increment) {
      if (count > 0) {
        if (count === array.length - 1) {
          return true;
        }
      }
      array_increment = array[i];
      count = 1;
    } else {
      count++;
    }
  }
  return false;
}

/************************************************** */
//A run(a sequence K+1 to K+N for some K = 0)
/************************************************** */
function isStraight(array) {
  //sorts array from lowest to highest
  array.sort(function (a, c) {
    return a - c;
  });
  for (var i = 1; i < array.length; i++) {
    var previous = array[i - 1];
    var current = array[i];
    if (previous + 1 !== current) {
      return false;
    }
  }
  return true;
}

/************************************************** */
//All dice have different values, but it is not a run
/************************************************** */
function allUniqueValues(array) {
  for (var i = 0; i < array.length; i++) {
    //  var diceValue = array[i];
    if (isStraight(array) == true) {
      break;
    }
    if (identicalMinusOne(array) == true) {
      break;
    }
    if (identical(array) == true) {
      break;
    } else if (array.length === new Set(array).size) {
      return true;
    }
  }
  return false;
}

function otherOutcome(array) {
  if (
    isStraight(array) ||
    identicalMinusOne(array) ||
    identical(array) ||
    allUniqueValues(array) === true
  ) {
    return false;
  } else {
    return true;
  }
}

/************************************************** */
// Display and compute round scores
/************************************************** */
function scores(N, roundPoints, alert) {
  if (alert === "hidden") {
    roundPoints = 0;
    document.getElementById("roundScore").innerHTML = roundPoints;
    document.getElementById("alert").style.visibility = "hidden";
  } else {
    roundPoints += N;
    document.getElementById("roundScore").innerHTML = roundPoints;
    document.getElementById("alert").innerHTML = alert;
  }
}

/************************************************** */
// SHOW HIDE ADD DICE
/************************************************** */
function hideDice(eleID) {
  for (let i = 0; i < eleID.length; i++) {
    diceNumm = document.getElementById(eleID[i]).style.display = "none";
    diceNumm = document.getElementById(eleID[i]).src = "";
  }
  return diceNumm;
}
function displayDice(eleDice, diceRoll) {
  for (let i = 0; i < eleDice.length; i++) {
    document.getElementById(eleDice[i]).src = "dice-" + diceRoll[i] + ".png";
  }
}

function addDice(dice, N) {
  die = document.getElementById(dice).style.display = "inline";
  die = document.getElementById(dice).src = "dice-" + N + ".png";
  return die;
}
function setup() {
  window.alert(
    "Please select between 3-6 dice and roll, in each round a total score will be calcualted depending on the sequence of numbers. Each roll will count as 1 round, if you want to start again press New Game"
  );
}

//Depreciated Old code //

// if (identical(diceRoll) == true) {
//     roundPoints += 60;
//     document.getElementById("roundScore").innerHTML = roundPoints;
//     document.getElementById("alert").innerHTML = "Identical!!!";

//   }

//   if (identicalMinusOne(diceRoll) == true) {

//     roundPoints += 40;
//     document.getElementById("roundScore").innerHTML = roundPoints;
//     document.getElementById("alert").innerHTML = "40 points !!";
//   }

//   if (isStraight(diceRoll) == true) {

//     roundPoints += 20;
//     document.getElementById("roundScore").innerHTML = roundPoints;
//     document.getElementById("alert").innerHTML = "Straight!!";
//   }
//   if (allUniqueValues(diceRoll) == true) {

//     roundPoints += 0;
//     document.getElementById("roundScore").innerHTML = roundPoints;
//     document.getElementById("alert").innerHTML = "Unique!";
//   }
//   if (otherOutcome(diceRoll) == true) {

//     roundPoints = 0;
//     document.getElementById("roundScore").innerHTML = roundPoints;
//     document.getElementById("alert").style.visibility = "hidden";
//   }
//   totalScore += roundPoints;
//   document.getElementById("TotalScore").innerHTML = totalScore;
// }
