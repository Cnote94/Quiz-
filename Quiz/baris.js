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
        }
    ];


    const question_text = document.getElementById("question");
    const a_text = document.getElementById("a_text");
    const b_text = document.getElementById("b_text");
    const c_text = document.getElementById("c_text");
    const d_text = document.getElementById("d_text");
    const submit = document.getElementById("submit");
    const quiz = document.getElementById("quiz");
    const answerEls = document.querySelectorAll(".answer");


    let currentquiz = 0;
    let score = 0;

    loadquestion();


    function loadquestion() {
        deleteselect();

        const currentquizdata = quizData[currentquiz];


        question_text.innerText = currentquizdata.question;
        a_text.innerText = currentquizdata.a;
        b_text.innerText = currentquizdata.b;
        c_text.innerText = currentquizdata.c;
        d_text.innerText = currentquizdata.d;


    }

    function getselected() {
        let answer;
        answerEls.forEach((answerEl) => {
            if (answerEl.checked) {
                answer = answerEl.id
            }
        });

        return answer



    }

    function deleteselect() {
        answerEls.forEach(answerEl => {
            if (answerEl.checked) {
                answerEl.checked = false;
            }

        })
    }

    submit.addEventListener("click", function() {

        const answer = getselected();

        if (answer === quizData[currentquiz].correct) {
            score++;
        }

        currentquiz++;

        if (currentquiz < quizData.length) {
            loadquestion();
        } else {
            quiz.innerHTML = `<h2>Correct score ${score}/${quizData.length}</h2>
                   
        `;
        }



    });















};