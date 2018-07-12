const cultural = 0
const government = 0
const economic = 0

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

questions = [
    // example of how question object is structured
    {
        text: "I prefer a strong central government",
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
question_no = 0

function showQuestion(){
    const output = [];

    currentQuestion = questions[question_no].text
    questionText = `<p>${currentQuestion}</p>`
    output.push(questionText)
    quizContainer.innerHTML = output.join('')
}

showQuestion();