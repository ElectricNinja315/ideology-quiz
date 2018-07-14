const cultural = 0
const government = 0
const economic = 0

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

questions = [
    // example of how question object is structured
    {
        text: "I prefer a strong central government.",
        category: "governemnt"
    },
    {
        text: "I believe morality is objective rather than subjective.",
        category: "cultural"
    },
    {
        text: "Our country's should always try to minimize unemployment.",
        category: "economic"
    }
]

// TODO: print each question object 1 by 1, followed by a set of agree/disagree answer choices
questionNo = 0
answers = ["Strongly agree", "Agree", "Disagree", "Strongly disagree"]

function printQuestion() {
    output = []
    currentQuestion = questions[questionNo]

    output.push(`
        <div>
            ${currentQuestion.text}
        </div>
        <br>
    `)

    for(var i = 0; i < answers.length; i++) {
        output.push(`
            <div>
                <input type="radio" name=${currentQuestion.category}${questionNo} value=${answers[i]} /> ${answers[i]}
            </div>
        `)
    }

    output.push(`<br>`)

    quizContainer.innerHTML = output.join("")
}

printQuestion();
