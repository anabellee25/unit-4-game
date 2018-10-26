
// A game with 4 crystals and a random number generator
// each crystal has to generate a random number and replace random number everytime user wins or loses
// computer has to generate a random number that the user has to use the crystals to match
//the total of the numbers have to be added together in one box in order for user to build and match comps random number
//track wins and losses



var wins = 0;
var losses = 0;
var computerTargetNumber = 0;
var sumOfGemValue = 0;

function randomNumberFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
 }
 
 function generateTargetNumber() {
    var minNumber = 19;
    var maxNumber = 120;
 
    var computerTargetNumber = randomNumberFromRange(minNumber, maxNumber);    
    console.log(computerTargetNumber);
    $("#randomNumber").text(computerTargetNumber);
 
 }

 generateTargetNumber();

function generateGemNumbers() {
    var minNumber = 1;
    var maxNumber = 12;
 
    var randomNumber = randomNumberFromRange(minNumber, maxNumber);
    var gemTwo = randomNumberFromRange(minNumber, maxNumber);
    var gemThree = randomNumberFromRange(minNumber, maxNumber);
    var gemFour = randomNumberFromRange(minNumber, maxNumber);
    
 
    console.log(gemTwo);

    $("#gem1").click(function () {
        sumOfGemValue = sumOfGemValue + randomNumber;
        $("#score").text(sumOfGemValue);
    })
    $("#gem2").click(function () {
        sumOfGemValue = sumOfGemValue + gemTwo;
        $("#score").text(sumOfGemValue);
    })
    $("#gem3").click(function () {
        sumOfGemValue = sumOfGemValue + gemThree;
        $("#score").text(sumOfGemValue);
    })
    $("#gem4").click(function () {
        sumOfGemValue = sumOfGemValue + gemFour;
        $("#score").text(sumOfGemValue);
    })
 
 }

 generateGemNumbers();

function matchingUserToComp () {
    
if (sumOfGemValue === computerTargetNumber) {
    wins++;
    $("#wins").append(wins);

    generateTargetNumber();
    generateGemNumbers();

  }

else {
    losses++;
    $("#losses").append(losses);
    generateTargetNumber();
    generateGemNumbers();
   }

  };
matchingUserToComp ();



