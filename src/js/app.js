const faq = document.querySelectorAll('.faq__item')

faq.forEach(question => {
    question.addEventListener('click', function() {
        this.classList.toggle('question__with-answer');
    })
})
