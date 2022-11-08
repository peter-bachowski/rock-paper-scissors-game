window.onload = function () {
    let startButton = document.getElementById("startGame"),
        roundTitle = document.getElementById("roundTitle"),
        rockButton = document.getElementById("rockButton"),
        paperButton = document.getElementById("paperButton"),
        scissorsButton = document.getElementById("scissorsButton"),
        yourScoreDiv = document.getElementById("yourScoreDiv"),
        AIScoreDiv = document.getElementById("AIScoreDiv"),
        infoBox = document.getElementById("infoBox"),
        round = 1, yourScore = 0, AIScore = 0, 
        playerChoice = 0, AIChoice = 0, rock = 1, paper = 2, scissors = 3;

    /*startButton.onclick = () => {
        while (true){
            if (round <= 3) {
                roundTitle.innerHTML = "Round " + round + "!";
                yourScoreDiv.innerHTML = yourScore;
                AIScoreDiv.innerHTML = AIScore;
                infoBox.innerHTML = "Choose rock, paper of scissors."

            }
            else {
                resetGame();
                break;
            }
            round++;
        }
    }*/

    rockButton.onclick = () => {
        AIChoice = Math.ceil(Math.random() * 3);
        playerChoice = 1;
        if(AIChoice === 2){
            infoBox.innerHTML = "You Lose!";
        }
        else if(AIChoice === 3){
            infoBox.innerHTML = "You Win!";
        }
        else {
            infoBox.innerHTML = "Try Again!";
        }
    }
    paperButton.onclick = () => {
        AIChoice = Math.ceil(Math.random() * 3);
        playerChoice = 2;
        if(AIChoice === 1){
            infoBox.innerHTML = "You Win!";
        }
        else if(AIChoice === 3){
            infoBox.innerHTML = "You Lose!";
        }
        else {
            infoBox.innerHTML = "Try Again!";
        }
    }
    scissorsButton.onclick = () => {
        AIChoice = Math.ceil(Math.random() * 3);
        playerChoice = 3;
        if(AIChoice === 1){
            infoBox.innerHTML = "You Lose!";
        }
        else if(AIChoice === 2){
            infoBox.innerHTML = "You Win!";
        }
        else {
            infoBox.innerHTML = "Try Again!";
        }
    }

    function resetGame () {
        round = 0;
        yourScore = 0;
        AIScore = 0;
        yourScoreDiv.innerHTML = null;
        AIScoreDiv.innerHTML = null;
        roundTitle.innerHTML = "Round ";
    }
}