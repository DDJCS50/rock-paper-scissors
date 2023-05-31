function getComputerChoice() {
    let random;
    function randomNumber(max) {
        return Math.floor(Math.random() * max);
    }
    random = randomNumber(3);
    if (random === 0) {
        return "Rock";
    } else if (random === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {

    if (computerSelection === "Rock" && playerSelection === "Scissors") {
        computerScore++;
        return "You Lose! Rock beats Scissors";
    } else if (computerSelection === "Rock" && playerSelection === "Paper") {
        playerScore++;
        return "You Win! Paper beats Rock";
    } else if (computerSelection === "Rock" && playerSelection === "Rock") {
        return "Tie! Rock equals Rock";
    } else if (computerSelection === "Paper" && playerSelection === "Rock") {
        computerScore++;
        return "You Lose! Paper beats Rock";
    } else if (computerSelection === "Paper" && playerSelection === "Scissors") {
        playerScore++;
        return "You Win! Scissors beats Paper";
    } else if (computerSelection === "Paper" && playerSelection === "Paper") {
        return "Tie! Paper equals Paper";
    } else if (computerSelection === "Scissors" && playerSelection === "Paper") {
        computerScore++;
        return "You Lose! Scissors beats Paper";
    } else if (computerSelection === "Scissors" && playerSelection === "Rock") {
        playerScore++;
        return "You Win! Rock beats Scissors";
    } else if (computerSelection === "Scissors" && playerSelection === "Scissors") {
        return "Tie! Scissors equals Scissors";
    }
}

let playerScore = 0;
let computerScore = 0;
let roundWinner;
let playerChoice;

const results = document.getElementById('results');
let paragraphAnnounceWinner = document.createElement('p');
let paragraphPlayerScore = document.createElement('p');
let paragraphComputerScore = document.createElement('p');
let paragraphGameWinner = document.createElement('p');
results.appendChild(paragraphAnnounceWinner);
results.appendChild(paragraphPlayerScore);
results.appendChild(paragraphComputerScore);
results.appendChild(paragraphGameWinner);

function game() {
    roundWinner = playRound(playerChoice, getComputerChoice());
    
    paragraphAnnounceWinner.innerText = roundWinner;
    paragraphPlayerScore.innerText = `Player: ${playerScore}`;
    paragraphComputerScore.innerText = `Computer: ${computerScore}`;
    paragraphGameWinner.innerText = "";
    

    if (playerScore > 4) {
        paragraphGameWinner.innerText = "You Win The Game!";
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore > 4) {
        paragraphGameWinner.innerText = "You Lose The Game!";
        playerScore = 0;
        computerScore = 0;
    }
}



const buttonPressedRock = document.getElementById('rock');
buttonPressedRock.addEventListener('click', (event) => {
    event.stopPropagation();
    playerChoice = 'Rock';
    game();
});

const buttonPressedPaper = document.getElementById('paper');
buttonPressedPaper.addEventListener('click', (event) => {
    event.stopPropagation();
    playerChoice = 'Paper';
    game();
});

const buttonPressedScissors = document.getElementById('scissors');
buttonPressedScissors.addEventListener('click', (event) => {
    event.stopPropagation();
    playerChoice = 'Scissors';
    game();
});
