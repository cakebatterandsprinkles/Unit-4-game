$(document).ready(function() {
    let computerNumber;
    let totalScore = 0;
    let redCrystalNumber;
    let blueCrystalNumber;
    let yellowCrystalNumber;
    let purpleCrystalNumber;
    let wins = 0;
    let losses = 0;

    generateScoreNumber();
    generateCrystalNumber();

    console.log(redCrystalNumber);
    console.log(blueCrystalNumber);
    console.log(yellowCrystalNumber);
    console.log(purpleCrystalNumber);

    $("#redCrystal").on("click", function(){
        totalScore += redCrystalNumber;
        $(".totalScoreDisplay").text(totalScore);
        resultChecker();
    });
    $("#blueCrystal").on("click", function(){
        totalScore = totalScore + blueCrystalNumber;
        $(".totalScoreDisplay").text(totalScore);
        resultChecker();
    });
    $("#yellowCrystal").on("click", function(){
        totalScore = totalScore + yellowCrystalNumber;
        $(".totalScoreDisplay").text(totalScore);
        resultChecker();
    });
    $("#purpleCrystal").on("click", function(){
        totalScore = totalScore + purpleCrystalNumber;
        $(".totalScoreDisplay").text(totalScore);
        resultChecker();
    });

    function generateCrystalNumber() {
        redCrystalNumber = Math.floor(Math.random() * 12) + 1;
        blueCrystalNumber = Math.floor(Math.random() * 12) + 1;
        yellowCrystalNumber = Math.floor(Math.random() * 12) + 1;
        purpleCrystalNumber = Math.floor(Math.random() * 12) + 1;
        if (redCrystalNumber === blueCrystalNumber || blueCrystalNumber === yellowCrystalNumber || yellowCrystalNumber === purpleCrystalNumber || redCrystalNumber === purpleCrystalNumber || blueCrystalNumber === purpleCrystalNumber || redCrystalNumber === yellowCrystalNumber) {
            generateCrystalNumber();
        };
    }

    function generateScoreNumber() {
        computerNumber = Math.floor(Math.random() * 101) + 19;
        $(".computerDisplay").text(computerNumber);
    }

    function resultChecker () {
        if (computerNumber == totalScore) {
            wins++;
            $(".winsDisplay").text(wins);
            resetGame()
        } else if (totalScore > computerNumber) {
            losses++;
            $(".lossesDisplay").text(losses);
            resetGame()
        }
    }
    function resetGame() {
        totalScore = 0;
        $(".totalScoreDisplay").text(totalScore);
        generateScoreNumber();
        generateCrystalNumber();
    }
});







