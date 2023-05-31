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
let paragraph = document.createElement('p');
results.appendChild(paragraph);

function game() {
    roundWinner = playRound(playerChoice, getComputerChoice());
    
    paragraph.innerText = roundWinner;
    
    console.log(`Player: ${playerScore}`);
    console.log(`Computer: ${computerScore}`);
    

    if (playerScore > 4) {
        console.log("You Win The Game!");
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore > 4) {
        console.log("You Lose The Game!");
        playerScore = 0;
        computerScore = 0;
    }
}



const buttonPressedRock = document.getElementById('rock');
buttonPressedRock.addEventListener('click', (event) => {
    event.stopPropagation();
    playerChoice = 'Rock';
    console.log(playerChoice);
    game();
});

const buttonPressedPaper = document.getElementById('paper');
buttonPressedPaper.addEventListener('click', (event) => {
    event.stopPropagation();
    playerChoice = 'Paper';
    console.log(playerChoice);
    game();
});

const buttonPressedScissors = document.getElementById('scissors');
buttonPressedScissors.addEventListener('click', (event) => {
    event.stopPropagation();
    playerChoice = 'Scissors';
    console.log(playerChoice);
    game();
});
