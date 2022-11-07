window.onload = function () {
    let startButton = document.getElementById("startGame"),
        roundTitle = document.getElementById("roundTitle"),
        rockButton = document.getElementById("rockButton"),
        paperButton = document.getElementById("paperButton"),
        scissorsButton = document.getElementById("scissorsButton"),
        yourScoreDiv = document.getElementById("yourScoreDiv"),
        AIScoreDiv = document.getElementById("AIScoreDiv"),
        round = 1, yourScore = 0, AIScore = 0;

    startButton.onclick = () => {
        while (round <= 3){
            whatRound.innerHTML = "Round " + round + "!";
            if (round >= 3) {
                resetGame();
            }
            else {
                yourScoreDiv.innerHTML = yourScore;
                AIScoreDiv.innerHTML = AIScore;
                round++;
            }
        }
    }

    function resetGame () {
        round = 0;
        yourScore = 0;
        AIScore = 0;
        yourScoreDiv.innerHTML = null;
        AIScoreDiv.innerHTML = null;
        roundTitle.innerHTML = null;
    }
}