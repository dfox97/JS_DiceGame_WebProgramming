//global variables
var totalScore=0,RoundNum=0;
//RESETS GAME
function newGame(){
  //add these so total gets reset to zero if it doesnt then it will continue adding
  totalScore=0,RoundNum=0;
    document.getElementById("TotalScore").innerHTML = 0;
    document.getElementById("roundScore").innerHTML = 0;
    document.getElementById("roundNum").innerHTML = 0;
    document.getElementById("dieContainer").innerHTML=0;
    die1=document.getElementById("dice").src="dice-1.png";
    die2=document.getElementById("dice1").src="dice-1.png";
    die3=document.getElementById("dice2").src="dice-1.png"; 
    document.getElementById("alert").innerHTML="";
    //numDice=0;  
};

//generates 5 random numbers between 1 and 6
function rollDice() 
{
    numDice = document.getElementById("diceNum").value;
    var container = document.getElementById("dieContainer");
    var diceRoll=[];
    var roundPoints=0;
    
    if (numDice<3 || numDice>6)
    {
       window.alert("Please enter 3 to 6 dice");
       return roundPoints=0, RoundNum=0;
       
    }
    else{
      container.innerHTML = "";//clears the old dice rolls
       for(var i=0;i<numDice;i++)
        {
          dice = Math.floor((Math.random() * 6) + 1);
          diceRoll.push(dice);
          console.log(diceRoll[0]);
          
          roundPoints += dice;
        }
        //document.getElementById("dieContainer").innerHTML = diceRoll;
      }
  //updating images depending on number of dice slected
      if(numDice>=3){
        RoundNum+=1;
        document.getElementById("roundNum").innerHTML = RoundNum;

        die1=document.getElementById("dice").src="dice-"+diceRoll[0]+".png";
        die2=document.getElementById("dice1").src="dice-"+diceRoll[1]+".png";
        die3=document.getElementById("dice2").src="dice-"+diceRoll[2]+".png"; 
        if(numDice>=4){
          die4=document.getElementById("dice3").style.display = "inline";
          die4=document.getElementById("dice3").src ="dice-"+diceRoll[3]+".png";}
          if(numDice>=5){
            die5=document.getElementById("dice4").style.display = "inline";
            die5=document.getElementById("dice4").src ="dice-"+diceRoll[4]+".png";}
            if(numDice==6){
              die6=document.getElementById("dice5").style.display = "inline";
              die6=document.getElementById("dice5").src ="dice-"+diceRoll[5]+".png";}
     }
          
        if (identical(diceRoll)==true){
          roundPoints+=60;console.log("Identical: "+roundPoints);document.getElementById("roundScore").innerHTML = roundPoints;
          document.getElementById("alert").innerHTML="Identical!!!";};
          
        if (identicalMinusOne(diceRoll)==true){roundPoints+=40;console.log("N-1: "+roundPoints); document.getElementById("roundScore").innerHTML = roundPoints;
        document.getElementById("alert").innerHTML="40 points !!";};

        if (isStraight(diceRoll)==true){
          roundPoints+=20; console.log("Straight: "+roundPoints);document.getElementById("roundScore").innerHTML = roundPoints;
          document.getElementById("alert").innerHTML="Straight!!";
        }
        if (allUniqueValues(diceRoll)==true){
          roundPoints+=0; console.log("All Unqiue and not a Straight: "+roundPoints);document.getElementById("roundScore").innerHTML = roundPoints;
          document.getElementById("alert").innerHTML="Unique!";
        }
       if(otherOutcome(diceRoll)==true){
        roundPoints=0; console.log("Other outcome: " + roundPoints);document.getElementById("roundScore").innerHTML = roundPoints;
        document.getElementById("alert").innerHTML="";
       };
       totalScore+=roundPoints;
       document.getElementById("TotalScore").innerHTML = totalScore;
       
       
}

/************************************************** */ 
//Checking  All N dice have the same value
/************************************************** */ 
function identical(array) {
  var first = array[0];
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== first){return false;}
  }
  return true;}

/************************************************** */ 
//N - 1 but not N dice have the same value
/************************************************** */ 

//Counts thee number of elements in array and if the counter is equal the array return true
function identicalMinusOne(array) {
  array.sort();
  var array_increment = null;
  var count = 0;
  for (var i = 0; i <= array.length; i++) {
      if (array[i] != array_increment) 
      {
          if (count > 0) 
          {
            if (count === array.length-1){return true;}
          }
          array_increment = array[i];
          count = 1;
      } else {count++;}
  }
  return false;}
//Found an easier way to write the algorithm but it was from stackoverflow https://stackoverflow.com/questions/64976650/checking-if-the-array-has-duplicates-apart-from-one-element-javascript-dice 
//Used my own method instead and took inspiration from the commented code shown:
// function nDiceMinusOne(array)
// // const nDiceMinusOne = (array) => {
// //     let counts = Object.values(array.reduce((c, v) =>
// //       (c[v] = (c[v] || 0) + 1, c), {}));
// //     return counts.length == 2 && Math.min(...counts) == 1
// //   }

/************************************************** */ 
//A run(a sequence K+1 to K+N for some K = 0)
/************************************************** */ 
function isStraight(array){
  //sorts array from lowest to highest
  array.sort(function(a,c){return a-c});
  for (var i=1; i<array.length; i++)
  {
    var previous = array[i-1];
    var current = array[i];
    if (previous+1 !== current){
      return false;}
  }
  return true;}

/************************************************** */  
//All dice have different values, but it is not a run
/************************************************** */ 
function allUniqueValues(array){
  
  for (var i=0; i<array.length; i++){
  //  var diceValue = array[i];
   if(isStraight(array)==true){break;}if(identicalMinusOne(array)==true){break;}if(identical(array)==true){break;}
   
   else if(array.length===new Set(array).size){return true;}
  }
return false;}

function otherOutcome(array){
  if(isStraight(array)||identicalMinusOne(array)||identical(array)||allUniqueValues(array)===true){return false;}
  else {return true;}
}


function setup(){
    window.alert("Please select between 3-6 dice and roll, in each round a total score will be calcualted depending on the sequence of numbers. Each roll will count as 1 round, if you want to start again press New Game");
}