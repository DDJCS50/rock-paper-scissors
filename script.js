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
    playerSelection = playerSelection.toLowerCase();
    let playerSelectionBody = playerSelection.substring(1);
    let playerSelectionFirst = playerSelection.charAt(0).toUpperCase();
    playerSelection = playerSelectionFirst + playerSelectionBody;

    if (computerSelection === "Rock" && playerSelection === "Scissors") {
        return "You Lose! Rock beats Scissors";
    } else if (computerSelection === "Rock" && playerSelection === "Paper") {
        return "You Win! Paper beats Rock";
    } else if (computerSelection === "Rock" && playerSelection === "Rock") {
        return "Tie! Rock equals Rock";
    } else if (computerSelection === "Paper" && playerSelection === "Rock") {
        return "You Lose! Paper beats Rock";
    } else if (computerSelection === "Paper" && playerSelection === "Scissors") {
        return "You Win! Scissors beats Paper";
    } else if (computerSelection === "Paper" && playerSelection === "Paper") {
        return "Tie! Paper equals Paper";
    } else if (computerSelection === "Scissors" && playerSelection === "Paper") {
        return "You Lose! Scissors beats Paper";
    } else if (computerSelection === "Scissors" && playerSelection === "Rock") {
        return "You Win! Rock beats Scissors";
    } else if (computerSelection === "Scissors" && playerSelection === "Scissors") {
        return "Tie! Scissors equals Scissors";
    }
}

playRound("ScIsSoRs", getComputerChoice());