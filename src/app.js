const elem = document.getElementById('art')
const arrow = elem.getElementsByTagName('path');
const question = document.querySelectorAll('article');

question.forEach(element => {
    element.addEventListener('click', showAnswer);
});

function showAnswer() {

    const elem = this.childNodes.length;
    const message = this.childNodes[elem - 2];
    const arrow = this.childNodes[elem - 4];

    if (!this.classList.contains('active')) {
        hideAnswer();

        this.classList.add('active');

        this.style.fontWeight = 700;
        this.style.paddingBottom = 0;

        message.style.overflow = 'visible';
        message.style.maxHeight = '100%';

        arrow.classList.add('arrow-rotate');
    }
    else {
        hideAnswer();
    };
}

function hideAnswer() {
    const activeAnswers = document.querySelectorAll('.active')

    activeAnswers.forEach(element => {
        element.classList.remove('active');

        const elem = element.childNodes.length;
        const message = element.childNodes[elem - 2];
        const arrow = element.childNodes[elem - 4];

        element.style.fontWeight = 500;
        element.style.paddingBottom = '18px';

        message.style.overflow = 'hidden';
        message.style.maxHeight = '0';

        arrow.classList.remove('arrow-rotate');
    });
}
