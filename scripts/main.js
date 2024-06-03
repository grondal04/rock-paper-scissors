
const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

const ROBOT_ROCK_ANIM_SRC = '../assets/gameplay/no-loop-count-clean/robot-rock.gif'
const ROBOT_PAPER_ANIM_SRC = '../assets/gameplay/no-loop-count-clean/robot-paper.gif'
const ROBOT_SCISSORS_ANIM_SRC = '../assets/gameplay/no-loop-count-clean/robot-scissors.gif'

const HUMAN_ROCK_ANIM_SRC = '../assets/gameplay/no-loop-count-clean/human-rock.gif'
const HUMAN_PAPER_ANIM_SRC = '../assets/gameplay/no-loop-count-clean/human-paper.gif'
const HUMAN_SCISSORS_ANIM_SRC = '../assets/gameplay/no-loop-count-clean/human-scissors.gif'

const NORMAL_COLOR = '#9DCAFF';
const LOSING_COLOR = '#FF9DE9';
const WINNING_COLOR = '#A4EE98';

var btnRock, btnPaper, btnScissors;
var humanGameplayAnim, robotGameplayAnim;

var btnContinue;

var armRobot, palmRobot, armHuman, palmHuman;
var credit;

var resultH2, result;
var DOC_aiScore, DOC_humanScore;

//MAIN FUNCTION
document.addEventListener("DOMContentLoaded", (event) => {
    DOC_aiScore = document.getElementById('AI-score');
    DOC_humanScore = document.getElementById('human-score');

    humanGameplayAnim = document.getElementById('human-gameplay-anim');
    robotGameplayAnim = document.getElementById('robot-gameplay-anim');

    armRobot = document.querySelector('img.arm-robot');
    palmRobot = document.querySelector('img.palm-robot');
    armHuman = document.querySelector('img.arm-human');
    palmHuman = document.querySelector('img.palm-human');
    credit = document.getElementById('credit');

    result = document.getElementById('result')
    resultH2 = document.querySelector('#result h2');

    btnContinue = document.getElementById('continue');

    hideAnim();


    btnRock = document.getElementById('btn-rock');

    btnRock.addEventListener('click', function() {
        playRound(ROCK);
    });

    btnPaper = document.getElementById('btn-paper');
    btnPaper.addEventListener('click', function() {
        playRound(PAPER);
    });

    btnScissors = document.getElementById('btn-scissors');
    btnScissors.addEventListener('click', function() {
        playRound(SCISSORS);
    });

    btnContinue.addEventListener('click', function() {
        
        setBackgroundToNormal();
        showAllBtn();
        hideAnim();
        showDefaultArms();
        showCredit();
        hideResult();
        
    })
})