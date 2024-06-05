var humanScore = 0;
var computerScore = 0;

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    let comparisonRs = comparison(humanChoice, computerChoice);

    hideDefaultArms();
    hideCredit();

    let humanAnimSrc = '';
    let robotAnimSrc = '';

    switch (humanChoice) {
        case ROCK:
            humanAnimSrc = HUMAN_ROCK_ANIM_SRC;
            break;
        case PAPER:
            humanAnimSrc = HUMAN_PAPER_ANIM_SRC;
            break;
        case SCISSORS:
            humanAnimSrc = HUMAN_SCISSORS_ANIM_SRC;
            break;
    }

    switch (computerChoice) {
        case ROCK:
            robotAnimSrc = ROBOT_ROCK_ANIM_SRC;
            break;
        case PAPER:
            robotAnimSrc = ROBOT_PAPER_ANIM_SRC;
            break;
        case SCISSORS:
            robotAnimSrc = ROBOT_SCISSORS_ANIM_SRC;
            break;
    }

    hideAllBtn();

    showAnim();
    humanGameplayAnim.src = humanAnimSrc;
    robotGameplayAnim.src = robotAnimSrc;
    setPlayingMovingAnim();
        
    if (comparisonRs === -1) {
        logResultDraw();
    }
    else if (comparisonRs === humanChoice) {
        logResultWinPlayer();
        setWinningBackground();
        humanScore++;
    } else {
        logResultLostPlayer();
        setLosingBackground();
        computerScore++;
    }

    setTimeout(function() {
        showResult();
        updateScore();
    }, 2000)
}

function comparison(choiceA, choiceB) {
    if (choiceA === choiceB)
        return -1;

    if ((choiceB - choiceA) % 2 === 0) 
        return choiceB > choiceA ? choiceA : choiceB;
    return choiceB > choiceA ? choiceB : choiceA;
}

function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);
    return number;
}

//MINOR FUNCTION
function hideCredit() {
    credit.style.display = 'none';
}

function showCredit() {
    credit.style.display = 'block';
}

function showResult() {
    result.style.display = 'flex';
}

function hideResult() {
    result.style.display = 'none';
}

function hideAllBtn() {
    btnRock.style.display = 'none';
    btnPaper.style.display = 'none';
    btnScissors.style.display = 'none';   
}

function showAllBtn() {
    btnRock.style.display = 'block';
    btnPaper.style.display = 'block';
    btnScissors.style.display = 'block';   
}

function hideDefaultArms() {
    armHuman.style.display = 'none';
    palmHuman.style.display = 'none';
    armRobot.style.display = 'none';
    palmRobot.style.display = 'none';
}

function showDefaultArms() {
    armHuman.style.display = 'block';
    palmHuman.style.display = 'block';
    armRobot.style.display = 'block';
    palmRobot.style.display = 'block';
}


function hideAnim() {
    humanGameplayAnim.style.display = 'none';
    robotGameplayAnim.style.display = 'none';

    humanGameplayAnim.src = '';
    robotGameplayAnim.src = '';
}

function showAnim() {
    humanGameplayAnim.style.display = 'block';
    robotGameplayAnim.style.display = 'block';
}


//RESULT
function logResultDraw() {
    let logMessage = "Draw!";
    console.log(logMessage);
    resultH2.textContent = logMessage;
}

function logResultWinPlayer() {
    let logMessage = "You Win!";
    console.log(logMessage);
    resultH2.textContent = logMessage;
}

function logResultLostPlayer() {
    let logMessage = "You Lost!";
    console.log(logMessage);
    resultH2.textContent = logMessage;
}

function updateScore() {
    DOC_aiScore.textContent = computerScore;
    DOC_humanScore.textContent = humanScore;
}

function updateRedscore() {
    if (computerScore >= 5) {
        DOC_aiScore.style.color = 'red';
    } else if (humanScore >= 5) {
        DOC_humanScore.style.color = 'red';
    }
}

function showBtnRestart() {
    btnRestart.style.display = 'block';
}

function hideBtnRestart() {
    btnRestart.style.display = 'none';
}

function hideBtnContinue() {
    btnContinue.style.display = 'none';
}

function displayFinalResult() {
    let endResult = '';
    if (computerScore === humanScore === 5)
        endResult = 'DRAW';
    if (computerScore >= 5)
        endResult = PLAYER_LOSE_OVERALL;
    else if (humanScore >= 5)
        endResult = PLAYER_WIN_OVERALL;

    resultH2.textContent = endResult;
    resultH2.style.letterSpacing = '0rem';
    let container = document.querySelector('.container');
    container.style.justifyContent = 'center';
}