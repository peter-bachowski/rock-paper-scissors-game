window.onload = function () {//when the page loads, run the code 
    let yourScore = 0, AIScore = 0, round = 1,
        playerChoice = 0, AIChoice = 0;
    const startButton = document.getElementById("startGame"), //declares all variables in the script, including setting variables for the divs themselves
        resetButton = document.getElementById("reset"),
        roundTitle = document.getElementById("roundTitle"),
        rockButton = document.getElementById("rockButton"),
        paperButton = document.getElementById("paperButton"),
        scissorsButton = document.getElementById("scissorsButton"),
        yourScoreDiv = document.getElementById("yourScoreDiv"),
        AIScoreDiv = document.getElementById("AIScoreDiv"),
        infoBox = document.getElementById("infoBox"),
        rock = 1, paper = 2, scissors = 3;

    startButton.onclick = () => { //Sets the initial scores and round for the beginning of the game, and also sets functions to each button
        resetGame();
        roundTitle.innerHTML = "Round " + round + "!";
        yourScoreDiv.innerHTML = "Player score: " + yourScore;
        AIScoreDiv.innerHTML = "AI Score: " + AIScore;
        infoBox.innerHTML = "Choose rock, paper of scissors."
        rockButton.addEventListener("click", rockButtonClickFunction) //creates a click listener for the rock button
        paperButton.addEventListener("click", paperButtonClickFunction)//creates a click listener for the paper button
        scissorsButton.addEventListener("click", scissorsButtonClickFunction)//creates a click listener for the scissors button
        
    }
    resetButton.onclick = function() {//when the reset button is pressed, it resets the game and all variables to initial values
        resetGame();
    }

    function rockButtonClickFunction () { //this function creates the logic when you click rock
        AIChoice = Math.ceil(Math.random() * 3);//generates a random number between one and three and rounds up, where the number dictates if the computer chooses rock, paper or scissors
        playerChoice = rock;
        if(AIChoice === paper){
            infoBox.innerHTML = "You chose rock. Paper beats rock so you lose the round!";
            AIScore++;
            giveScores();
        }
        else if(AIChoice === scissors){
            infoBox.innerHTML = "You chose rock. Rock beats scissors so you win the round!";
            yourScore++;
            giveScores();
        }
        else {
            infoBox.innerHTML = "You both chose rock. Try Again!";
            giveScores();
        }
    }
    function paperButtonClickFunction () {//logic for chooseing paper, same as for the rock
        AIChoice = Math.ceil(Math.random() * 3);
        playerChoice = paper;
        if(AIChoice === rock){
            infoBox.innerHTML = "You chose paper. Paper beats rock so you win the round!";
            yourScore++;
            giveScores();
        }
        else if(AIChoice === scissors){
            infoBox.innerHTML = "You chose paper. Scissors beats paper so you lose the round!";
            AIScore++;
            giveScores();
        }
        else {
            infoBox.innerHTML = "You both chose paper. Try Again!";
            giveScores();
        }
    }
    function scissorsButtonClickFunction () {//logic for choosing scissors; same logic as previous two
        AIChoice = Math.ceil(Math.random() * 3);
        playerChoice = scissors;
        if(AIChoice === rock){
            infoBox.innerHTML = "You chose scissors. Rock beats scissors so you lose the round!";
            AIScore++;
            giveScores();
        }
        else if(AIChoice === paper){
            infoBox.innerHTML = "You chose scissors. Scissors beats paper so you win the round!";
            yourScore++;
            giveScores();
        }
        else {
            infoBox.innerHTML = "You both chose scissors. Try Again!";
            giveScores();
        }
    }

    function giveScores(){//displays the scores in the score divs, as well as shows who won in the info div
        roundTitle.innerHTML = "Round " + round + "!";
        yourScoreDiv.innerHTML = "Player score: " + yourScore;
        AIScoreDiv.innerHTML = "AI Score: " + AIScore;
        if (round >= 3 && (AIScore != 0 && yourScore != 0)){
            if(yourScore > AIScore){//if it's the third round and your score is higher than the AI's, you win
                infoBox.innerHTML += "<br>" + " You win the game!";
                buttonsOff();
            }
            else if(yourScore < AIScore){//if it's the third round and your score is lower than the AI's, you lose
                infoBox.innerHTML += "<br>" + " You lose the game!";
                buttonsOff();
            }
        }
        round++;
    }

    function resetGame () {//resets the game and clears all variables and the inner HTML of all divs with information. Also diables the buttons.
        round = 1;
        yourScore = 0;
        AIScore = 0;
        yourScoreDiv.innerHTML = null;
        AIScoreDiv.innerHTML = null;
        roundTitle.innerHTML = "Round ";
        infoBox.innerHTML = null;
        buttonsOff();
    }

    function buttonsOff() {//this function removes the click listener for the rock paper scissors buttons
        rockButton.removeEventListener("click", rockButtonClickFunction);
        paperButton.removeEventListener("click", paperButtonClickFunction);
        scissorsButton.removeEventListener("click", scissorsButtonClickFunction); 
    }
}