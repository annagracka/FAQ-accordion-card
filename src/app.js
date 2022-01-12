const elem = document.getElementById('art')
const arrow = elem.getElementsByTagName('path');
const question = document.querySelectorAll('article');
const answer = document.getElementsByClassName('.answer')



question.forEach(element => {
    element.addEventListener('click', showText)
})


function showText() {
    const elem = this.childNodes.length;
    const message = this.childNodes[elem - 2];

    this.style.color = '#000';
    this.style.fontWeight = 700;
    this.style.paddingBottom = 0;

    message.style.overflow = 'visible';
    message.style.maxHeight = '100%';


}