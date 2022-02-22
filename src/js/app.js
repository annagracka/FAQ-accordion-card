const faq = document.querySelectorAll('.faq__question')

faq.forEach(question => {
    question.addEventListener('click', function() {
        this.classList.toggle('question__with-answer');
    })
})
