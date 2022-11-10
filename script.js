window.onload = function () {
    let startButton = document.getElementById("startGame"),
        roundTitle = document.getElementById("roundTitle"),
        rockButton = document.getElementById("rockButton"),
        paperButton = document.getElementById("paperButton"),
        scissorsButton = document.getElementById("scissorsButton"),
        yourScoreDiv = document.getElementById("yourScoreDiv"),
        AIScoreDiv = document.getElementById("AIScoreDiv"),
        infoBox = document.getElementById("infoBox"),
        yourScore = 0, AIScore = 0, round = 1,
        playerChoice = 0, AIChoice = 0, rock = 1, paper = 2, scissors = 3;

    startButton.onclick = () => {
        roundTitle.innerHTML = "Round " + round + "!";
        yourScoreDiv.innerHTML = yourScore;
        AIScoreDiv.innerHTML = AIScore;
        infoBox.innerHTML = "Choose rock, paper of scissors."
        rockButton.addEventListener("click", rockButtonClickFunction)
        paperButton.addEventListener("click", paperButtonClickFunction)
        scissorsButton.addEventListener("click", scissorsButtonClickFunction)
    }

    function rockButtonClickFunction () {
        AIChoice = Math.ceil(Math.random() * 3);
        playerChoice = 1;
        if(AIChoice === 2){
            infoBox.innerHTML = "You Lose!";
            AIScore++;
            giveScores();
        }
        else if(AIChoice === 3){
            infoBox.innerHTML = "You Win!";
            yourScore++;
            giveScores();
        }
        else {
            infoBox.innerHTML = "Try Again!";
            giveScores();
        }
    }
    function paperButtonClickFunction () {
        AIChoice = Math.ceil(Math.random() * 3);
        playerChoice = 2;
        if(AIChoice === 1){
            infoBox.innerHTML = "You Win!";
            yourScore++;
            giveScores();
        }
        else if(AIChoice === 3){
            infoBox.innerHTML = "You Lose!";
            AIScore++;
            giveScores();
        }
        else {
            infoBox.innerHTML = "Try Again!";
            giveScores();
        }
    }
    function scissorsButtonClickFunction () {
        AIChoice = Math.ceil(Math.random() * 3);
        playerChoice = 3;
        if(AIChoice === 1){
            infoBox.innerHTML = "You Lose!";
            AIScore++;
            giveScores();
        }
        else if(AIChoice === 2){
            infoBox.innerHTML = "You Win!";
            yourScore++;
            giveScores();
        }
        else {
            infoBox.innerHTML = "Try Again!";
            giveScores();
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

    function giveScores(){
        yourScoreDiv.innerHTML = yourScore;
        AIScoreDiv.innerHTML = AIScore;
    }
}