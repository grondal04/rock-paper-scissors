//Hand loop animation on the starting screen.
//Using gsap library

var DOC_body;

document.addEventListener("DOMContentLoaded", (event) => {
    var armRobot = document.querySelector('.arm-robot');
    var palmRobot = document.querySelector('.palm-robot');
    var armHuman = document.querySelector('.arm-human');
    var palmHuman = document.querySelector('.palm-human');
    DOC_body = document.querySelector('body');

    gsap.to([armRobot, palmRobot], {duration: 1, y: 50, ease: 'bounce', repeat: -1, yoyo: true});
    gsap.to(palmRobot, {duration: 1, y: 70, x: 10, rotation: 10, ease: 'bounce', repeat: -1, yoyo: true})
    
    gsap.to([palmHuman, armHuman], {duration: 1, y: 50, ease: 'bounce', repeat: -1, yoyo: true});
    gsap.to(palmHuman, {duration: 1, y: 70, x:-10, rotation: -10, ease: 'bounce', repeat: -1, yoyo: true})
});

function setWinningBackground() {
    setTimeout(() => {
        gsap.to(DOC_body, {duration: 1, backgroundColor: WINNING_COLOR, ease: 'elastic'})
    }, 1600);
}

function setLosingBackground() {
    setTimeout(() => {
        gsap.to(DOC_body, {duration: 1, backgroundColor: LOSING_COLOR, ease: 'elastic'})
    }, 1600);
}

function setBackgroundToNormal() {
    gsap.to(DOC_body, {duration: 1, backgroundColor: NORMAL_COLOR, ease: 'elastic'})
    console.log('background to normal')
}

function setPlayingMovingAnim() {
    gsap.to(humanGameplayAnim, {duration: 1, x:-200, y:100, ease:'elastic', repeat: 0});
    gsap.to(robotGameplayAnim, {duration: 1, x:200, y:100, ease:'elastic', repeat: 0});
}