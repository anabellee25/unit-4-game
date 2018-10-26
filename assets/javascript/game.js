
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
 
    computerTargetNumber = randomNumberFromRange(minNumber, maxNumber);    
    console.log("target",computerTargetNumber);
    $("#randomNumber").text(computerTargetNumber);
 
 }

 generateTargetNumber();

var gems = {}
function generateGemNumbers() {
    var minNumber = 1;
    var maxNumber = 12;
 
    gems.one = randomNumberFromRange(minNumber, maxNumber);
    gems.two = randomNumberFromRange(minNumber, maxNumber);
    gems.three = randomNumberFromRange(minNumber, maxNumber);
    gems.four = randomNumberFromRange(minNumber, maxNumber);
    
};

 function run () {
    $("#gem1").click(function () {
        sumOfGemValue = sumOfGemValue + gems.one;
        $("#score").text(sumOfGemValue);
        matchingUserToComp ();
    })
    $("#gem2").click(function () {
        sumOfGemValue = sumOfGemValue + gems.two;
        $("#score").text(sumOfGemValue);
        matchingUserToComp ();
    })
    $("#gem3").click(function () {
        sumOfGemValue = sumOfGemValue + gems.three;
        $("#score").text(sumOfGemValue);
        matchingUserToComp ();
    })
    $("#gem4").click(function () {
        sumOfGemValue = sumOfGemValue + gems.four;
        $("#score").text(sumOfGemValue);
        matchingUserToComp ();
    })

}

 
 function matchingUserToComp () {
     
     if (sumOfGemValue === computerTargetNumber) {
         console.log(sumOfGemValue, computerTargetNumber)
         console.log("win");
         wins++;
         $("#wins").text("Wins: " + wins);
         sumOfGemValue = 0;
         $("#score").text(sumOfGemValue);
         generateTargetNumber();
         generateGemNumbers();
         
    } else if (sumOfGemValue > computerTargetNumber) {
        console.log("loss");

        losses++;
        $("#losses").text("Losses: " + losses);
        sumOfGemValue = 0;
        $("#score").text(sumOfGemValue);
        generateTargetNumber();
        generateGemNumbers();
    }  else {
        console.log("game continues");
    }
        
};


generateGemNumbers();
run ();


