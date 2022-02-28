const section = document.querySelector('section');


section.addEventListener("click", function(e) {


  const questions = Array.from(document.querySelectorAll(".faq__item"));
  

  for (let i = 0; i < questions.length; i++) {
    var question = questions[i]
    question.classList.remove('question--with-answer');
  }

  const currentQuestion = e.target;
  currentQuestion.classList.toggle('question--with-answer')
});
