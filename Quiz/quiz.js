window.onload = function what() {




    const quizData = [{
            question: "What is the most used programming language in 2019?",
            a: "Java",
            b: "C",
            c: "Python",
            d: "JavaScript",
            correct: "d",
        },
        {
            question: "Who is the President of US?",
            a: "Florin Pop",
            b: "Donald Trump",
            c: "Ivan Saldano",
            d: "Mihai Andrei",
            correct: "b",
        },
        {
            question: "What does HTML stand for?",
            a: "Hypertext Markup Language",
            b: "Cascading Style Sheet",
            c: "Jason Object Notation",
            d: "Helicopters Terminals Motorboats Lamborginis",
            correct: "a",
        },
        {
            question: "What year was JavaScript launched?",
            a: "1996",
            b: "1995",
            c: "1994",
            d: "none of the above",
            correct: "b",
        },
    ];
    const quiz = document.getElementById("quiz");
    const answerEls = document.querySelectorAll(".answer");
    const questionE1 = document.querySelector("#question");
    const a_text = document.querySelector("#a_text");
    const b_text = document.querySelector("#b_text");
    const c_text = document.querySelector("#c_text");
    const d_text = document.querySelector("#d_text");
    const submitBtn = document.querySelector("#submit");

    let currentQuiz = 0;
    let score = 0;

    loadQuiz();

    function loadQuiz() {
        deselectAnswers();
        const currentQuestion = quizData[currentQuiz];
        questionE1.innerText = currentQuestion.question;
        a_text.innerText = currentQuestion.a;
        b_text.innerText = currentQuestion.b;
        c_text.innerText = currentQuestion.c;
        d_text.innerText = currentQuestion.d;



    }

    function getSelected() {
        let answer;

        answerEls.forEach((answerEl) => {
            if (answerEl.checked) {
                answer = answerEl.id;
            }
        });

        return answer;

    }

    function deselectAnswers() {
        answerEls.forEach((answerEl) => {
            answerEl.checked = false;
        });
    }



    submitBtn.addEventListener("click", () => {


        const answer = getSelected();

        if (answer) {
            if (answer === quizData[currentQuiz].correct) {
                score++;
            }
            currentQuiz++;

            if (currentQuiz < quizData.length) {

                loadQuiz();
            } else {
                quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
            }

        }











    });

























};