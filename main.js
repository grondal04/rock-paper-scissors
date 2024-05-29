var humanScore = 0;
var computerScore = 0;

function translateNumber(number) {
    switch(number) {
        case 0: case '0':
            return 'Rock';
        case 1: case '1':
            return 'Paper';
        case 2: case '2':
            return 'Scissors';
        default:
            return 'This number does not exist';
    }
    return 'This number does not exist'
}

//0 -> Rock; 1 -> Paper; Scissors -> 2

function comparison(choiceA, choiceB) {
    if ((choiceB - choiceA) % 2 === 0) 
        return choiceB > choiceA ? choiceA : choiceB;
    return choiceB > choiceA ? choiceB : choiceA;
}

function getHumanChoice() {
    let choice = -1;
    
    do {
        choice = parseInt(prompt('What is your choice?'));   
    } while (choice < 0 || choice > 2)

    return choice;
}

function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);
    return number;
}

function logResultWinPlayer(playerChoice, computerChoice) {
    console.log("You Win! " + translateNumber(playerChoice) + " beats " + translateNumber(computerChoice))
}

function logResultLostPlayer(playerChoice, computerChoice) {
    console.log("You Lost! " + translateNumber(computerChoice) + " beats " + translateNumber(playerChoice))
}

function playRound(humanChoice, computerChoice) {
    if (comparison(humanChoice, computerChoice) === humanChoice) {
        logResultWinPlayer(humanChoice, computerChoice);
        humanScore++;
    } else {
        logResultLostPlayer(humanChoice, computerChoice);
        computerScore++;
    }
}

document.addEventListener("DOMContentLoaded", (event) => {
    
    for (let i = 0; i < 3; i++) {
        let choice1 = getComputerChoice();
        let choice2  = getHumanChoice();
    
        playRound(choice2, choice1);

        if (humanScore >= 2) break;
    }

    if (humanScore > computerScore || humanScore >= 2) {
        console.log("Overally, you win.");
    } else {
        console.log("Overally, you lose.");
    }
});