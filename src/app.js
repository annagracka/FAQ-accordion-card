const elem = document.getElementById('test')
const arrow = elem.getElementsByTagName('path');
const answer = document.getElementById('answer');

elem.addEventListener(onclick, displayAnswer);
let id = null;

function displayAnswer() {
    clearInterval(id);
    id = setInterval(rotateArrow, 1)
    let deg = 0;

    function rotateArrow() {
        if (deg === 180) {
            clearInterval(id);
        } else {
            deg+=5;
            elem.style.transform = `rotate(${deg}deg)`;
            elem.style.transformOrigin = `50% 50%`;
            answer.style.overflow = 'visible';
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    }
}

function showText() {
    
}