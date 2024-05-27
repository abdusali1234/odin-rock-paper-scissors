console.log("Let's play Rock Paper Scissors!");

const choices = ["Rock", "Paper", "Scissors"];
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber]
}


function getHumanChoice() {
    let choice = prompt("Please enter Rock, Paper, or Scissors");
    if (choice[0] == null) {
        alert("Please enter a valid term!");
        getHumanChoice();
        }
     else {
        const cleanedChoice = choice[0].toUpperCase() + choice.toLowerCase().slice(1);
        if (cleanedChoice == "Rock" || cleanedChoice == "Paper" || cleanedChoice == "Scissors") {
            return cleanedChoice;
        } else {
            alert("Please enter a valid term!");
            getHumanChoice();
    }
}
}







function playGame () {
    const numRounds = 5;
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        if ((humanChoice == "Rock" && computerChoice == "Scissors" || (humanChoice == "Scissors" && computerChoice == "Paper")) || (humanChoice == "Paper" && computerChoice == "Rock")) {
            alert(`You win, ${humanChoice} beats ${computerChoice}!`);
            humanScore++;
        }
        else if (humanChoice == computerChoice) {
            alert(`Draw, both picked ${humanChoice}`);
        } else {
            alert(`You lose, ${computerChoice} beats ${humanChoice}!`);
            computerScore++
        }
    }

    for (i = 0; i < numRounds; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    
    let gameOverString = ``;
    if (humanScore < computerScore) {
        gameOverString = `Computer score: ${computerScore}. Your score: ${humanScore}.
You win!`
    }
    else if (humanScore == computerScore){
        gameOverString = `Computer score: ${computerScore}. Your score: ${humanScore}.
It's a draw!`
    } else {
        gameOverString = `Computer score: ${computerScore}. Your score: ${humanScore}.
You lose!`
    }

    alert(gameOverString);
}

playGame();