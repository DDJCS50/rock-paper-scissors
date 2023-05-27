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
}

playRound("ScIsSoRs", getComputerChoice());