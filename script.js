window.onload = function () {//when the page loads, run the code 
    let startButton = document.getElementById("startGame"), //declares all variables in the script, including setting variables for the divs themselves
        resetButton = document.getElementById("reset"),
        roundTitle = document.getElementById("roundTitle"),
        rockButton = document.getElementById("rockButton"),
        paperButton = document.getElementById("paperButton"),
        scissorsButton = document.getElementById("scissorsButton"),
        yourScoreDiv = document.getElementById("yourScoreDiv"),
        AIScoreDiv = document.getElementById("AIScoreDiv"),
        infoBox = document.getElementById("infoBox"),
        yourScore = 0, AIScore = 0, round = 1,
        playerChoice = 0, AIChoice = 0, rock = 1, paper = 2, scissors = 3;

    buttonsOff();

    startButton.onclick = () => { //Sets the initial scores and round for the beginning of the game, and also sets functions to each button
        roundTitle.innerHTML = "Round " + round + "!";
        yourScoreDiv.innerHTML = yourScore;
        AIScoreDiv.innerHTML = AIScore;
        infoBox.innerHTML = "Choose rock, paper of scissors."
        rockButton.addEventListener("click", rockButtonClickFunction) //creates a click listener for the rock button
        paperButton.addEventListener("click", paperButtonClickFunction)//creates a click listener for the paper button
        scissorsButton.addEventListener("click", scissorsButtonClickFunction)//creates a click listener for the scissors button
        buttonsOn();
    }

    resetButton.onclick = function() {//when the rest button is pressed, it resets the game and all variables to initial values
        resetGame();
    }

    function rockButtonClickFunction () { //this function creates the logic when you click rock
        AIChoice = Math.ceil(Math.random() * 3);//generates a random number between one and three and rounds up, where the number dictates if the computer chooses rock, paper or scissors
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
    function paperButtonClickFunction () {//logic for chooseing paper, same as for the rock
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
    function scissorsButtonClickFunction () {//logic for choosing scissors; same logic as previous two
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

    function giveScores(){//displays the scores in the score divs, as well as shows who won in the info div
        roundTitle.innerHTML = "Round " + round + "!";
        yourScoreDiv.innerHTML = "Player score: " + yourScore;
        AIScoreDiv.innerHTML = "AI Score: " + AIScore;
        if (round >= 3 && (AIScore != 0 && yourScore != 0)){
            if(yourScore > AIScore){//if it's the third round and your score is higher than the AI's, you win
                infoBox.innerHTML = "You win the game!";
                buttonsOff();
            }
            else if(yourScore < AIScore){//if it's the third round and your score is lower than the AI's, you lose
                infoBox.innerHTML = "You lose the game!";
                buttonsOff();
            }
        }
        round++;
    }

    function resetGame () {//resets the game and clears all variables and the inner HTML of all divs with information
        round = 1;
        yourScore = 0;
        AIScore = 0;
        yourScoreDiv.innerHTML = null;
        AIScoreDiv.innerHTML = null;
        roundTitle.innerHTML = "Round ";
        infoBox.innerHTML = null;
        buttonsOff();
    }

    function buttonsOff() {//this function sets the id of the elements to none, therefore they are not able to index the buttons from the html file and effectively brake the link
        rockButton.id = "";
        paperButton.id = "";
        scissorsButton.id = "";
    }

    function buttonsOn() {//this function adds the proper IDs of the buttons to the script, allowing them to be clickable
        rockButton.id = "rockButton";
        paperButton.id = "paperButton";
        scissorsButton.id = "scissorsButton";
    }
}