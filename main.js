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
    if (choiceA === choiceB)
        return -1;

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

function logDraw() {

    let logMessage = "Draw! No one win";

    console.log(logMessage);

    var h2Element = document.createElement("h2");
    h2Element.textContent = logMessage;
    var container = document.getElementById("container");
    container.appendChild(h2Element);
}

function logResultWinPlayer(playerChoice, computerChoice) {

    let logMessage = "You Win! " + translateNumber(playerChoice) + " beats " + translateNumber(computerChoice);
    console.log(logMessage)

    let h2Element = document.createElement("h2");
    h2Element.textContent = logMessage;
    let container = document.getElementById("container");
    container.appendChild(h2Element);
}

function logResultLostPlayer(playerChoice, computerChoice) {

    let logMessage = "You Lost! " + translateNumber(computerChoice) + " beats " + translateNumber(playerChoice);
    console.log(logMessage)

    let h2Element = document.createElement("h2");
    h2Element.textContent = logMessage;
    let container = document.getElementById("container");
    container.appendChild(h2Element);
}

function playRound(humanChoice, computerChoice) {
    let comparisonRs = comparison(humanChoice, computerChoice);

    if (comparisonRs === -1) {
        logDraw();
    }
    else if (comparisonRs) {
        logResultWinPlayer(humanChoice, computerChoice);
        humanScore++;
    } else {
        logResultLostPlayer(humanChoice, computerChoice);
        computerScore++;
    }
}

document.addEventListener("DOMContentLoaded", (event) => {
    playGame();
});

function playGame() {
    for (let i = 0; i < 5; i++) {
        let choice1 = getComputerChoice();
        let choice2  = getHumanChoice();
    
        playRound(choice2, choice1);
    }

    let logMessage = ''
    if (humanScore > computerScore) {
        logMessage = 'Overrally, you win!'
    } else {
        logMessage = 'Overraly, you lose!'
    }

    console.log(logMessage)
    let h2Element = document.createElement("h2");
    h2Element.textContent = logMessage;
    h2Element.style.color = 'red'
    let container = document.getElementById("container");
    container.appendChild(h2Element);
}