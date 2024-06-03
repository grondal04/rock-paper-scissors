var armRobot = document.querySelector('.arm-robot');
var palmRobot = document.querySelector('.palm-robot');
var armHuman = document.querySelector('.arm-human');
var palmHuman = document.querySelector('.palm-human');

gsap.to([armRobot, palmRobot], {duration: 1, y: 50, ease: 'bounce', repeat: -1, yoyo: true});
gsap.to(palmRobot, {duration: 1, y: 70, x: 10, rotation: 10, ease: 'bounce', repeat: -1, yoyo: true})

gsap.to([palmHuman, armHuman], {duration: 1, y: 50, ease: 'bounce', repeat: -1, yoyo: true});
gsap.to(palmHuman, {duration: 1, y: 70, x:-10, rotation: -10, ease: 'bounce', repeat: -1, yoyo: true})