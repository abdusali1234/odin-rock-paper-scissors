

const choices = ["Rock", "Paper", "Scissors"];
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber]
}


const rockBtn  = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

const runningScore = document.querySelector("#runningScore")
const roundScore = document.querySelector("#Roundscore");
const human = document.querySelector("#human");
const computer = document.querySelector("#computer");
const finalScore = document.querySelector("#finalScore");

let humanScore = 0;
let computerScore = 0;
const targetScore = 5;
let isGameOver = false;

rockBtn.addEventListener("click", function() {
    if (!isGameOver){
        playRound("Rock", getComputerChoice());
        endGame();
    }
});


paperBtn.addEventListener("click", function() {
    if (!isGameOver){
        playRound("Paper", getComputerChoice());
        endGame();
    }
});

scissorsBtn.addEventListener("click", function() {
    if (!isGameOver){
        playRound("Scissors" , getComputerChoice());
        endGame();
    }
});








    

function playRound(humanChoice, computerChoice) {
    const newLi = document.createElement("li");
    newLi.classList.add("newLi");
    if ((humanChoice === "Rock" && computerChoice === "Scissors" 
        || (humanChoice === "Scissors" && computerChoice === "Paper")) 
        || (humanChoice === "Paper" && computerChoice === "Rock"))
        {
        newLi.innerText = `You win, ${humanChoice} beats ${computerChoice}!`;
        roundScore.appendChild(newLi);
        humanScore++;
        human.innerText = humanScore;
    }
    else if (humanChoice == computerChoice) {
        newLi.innerText = `Draw, both picked ${humanChoice}`;
        roundScore.appendChild(newLi);
    } else {
        newLi.innerText = `You lose, ${computerChoice} beats ${humanChoice}!`;
        roundScore.appendChild(newLi);
        computerScore++;
        computer.innerText = computerScore;
    }
}



function endGame() {
    if (humanScore === targetScore || computerScore === targetScore){
        isGameOver = true;
    }
    let gameOverString = ``;
    if (humanScore === targetScore) {
        gameOverString = `You won the game! Poggers!`;
    } 
    else if (computerScore === targetScore){
        gameOverString = `You lost the game, F in the chat.`;
    }
    finalScore.innerText = gameOverString;
}
