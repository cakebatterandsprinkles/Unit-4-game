$(document).ready(function () {
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

    $("#redCrystal").on("click", function () {
        totalScore += redCrystalNumber;
        $(".totalScoreDisplay").text(totalScore);
        resultChecker();
        checkWin();
    });

    $("#blueCrystal").on("click", function () {
        totalScore = totalScore + blueCrystalNumber;
        $(".totalScoreDisplay").text(totalScore);
        resultChecker();
        checkWin();
    });
    $("#yellowCrystal").on("click", function () {
        totalScore = totalScore + yellowCrystalNumber;
        $(".totalScoreDisplay").text(totalScore);
        resultChecker();
        checkWin();
    });
    $("#purpleCrystal").on("click", function () {
        totalScore = totalScore + purpleCrystalNumber;
        $(".totalScoreDisplay").text(totalScore);
        resultChecker();
        checkWin();
    });

    function generateCrystalNumber() {
        redCrystalNumber = Math.floor(Math.random() * 12) + 1;
        blueCrystalNumber = Math.floor(Math.random() * 12) + 1;
        yellowCrystalNumber = Math.floor(Math.random() * 12) + 1;
        purpleCrystalNumber = Math.floor(Math.random() * 12) + 1;
        if (redCrystalNumber === blueCrystalNumber || blueCrystalNumber === yellowCrystalNumber || 
            yellowCrystalNumber === purpleCrystalNumber || redCrystalNumber === purpleCrystalNumber || 
            blueCrystalNumber === purpleCrystalNumber || redCrystalNumber === yellowCrystalNumber) {
            generateCrystalNumber();
        } else {
            consoleNumbers();
        }
    }

    function generateScoreNumber() {
        computerNumber = Math.floor(Math.random() * 101) + 19;
        $(".computerDisplay").text(computerNumber);
    }

    function resultChecker() {
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

    function checkWin() {
        if (wins === 10 && losses < 10) {
            resetGame();
            wins = 0;
            $(".winsDisplay").text(wins);
            losses = 0;
            $(".lossesDisplay").text(losses);
            alert("Awesome! You won!");
        } else if (losses === 10 && wins < 10) {
            resetGame();
            wins = 0;
            $(".winsDisplay").text(wins);
            losses = 0;
            $(".lossesDisplay").text(losses);
            alert("You lost! But don't give up. Try again!");
        }
    }

    function resetGame() {
        totalScore = 0;
        $(".totalScoreDisplay").text(totalScore);
        generateScoreNumber();
        generateCrystalNumber();
    }

    function consoleNumbers() {
        console.log("Red Crystal is: " + redCrystalNumber + " points!");
        console.log("Blue Crystal is: " + blueCrystalNumber + " points!");
        console.log("Yellow Crystal is: " + yellowCrystalNumber + " points!");
        console.log("Purple Crystal is: " + purpleCrystalNumber + " points!");
        console.log("----------------------------");
    }
});