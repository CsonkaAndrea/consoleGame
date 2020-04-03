class Question {
    constructor(question, answer, correctAnswer) {
        this.question = question;
        this.answer = answer;
        this.correctAnswer = correctAnswer;
        this.printing = function () {
            console.log(this.question)
            console.log(this.answer[0])
            console.log(this.answer[1])
        }
        this.returnCorrectAnswer = function () {
            return this.correctAnswer
        }
    }
}


let questionOne = new Question('Do you like birds?', ['0 : yes', '1 : no'], 0)
let questionTwo = new Question('Which bird is your favorite?', ['0 : nightingale', '1 : blackbird'], 1)
let questionThree = new Question('Do you like plants?', ['0 : yes', '1 : no'], 0)

let allQuestions = [questionOne, questionTwo, questionThree];

let score = 0;

(function answerEvaluation() {
    correctAnswer = randomQuestionGenerator(allQuestions)
    userInput = inputBox()
    if (userInput === 'exit') {
        console.log('Your score: ' + score);
        score = 0
        return 0
    } else if (userInput === correctAnswer) {
        console.log('Great, you are right! :)')
        score++
        answerEvaluation()
    } else {
        console.log('Wrong answer, try again!')
        answerEvaluation()
    }
})()

function randomQuestionGenerator(allQuestions) {
    let randomNumber = Math.floor(Math.random() * 3)
    let randomQuestion = allQuestions[randomNumber]
    console.log(randomQuestion.printing())
    return randomQuestion.returnCorrectAnswer()
}

function inputBox() {
    let input = prompt("Type here your number or exit, if you want to quit the game!").toLowerCase()
    if (input === 'exit') {
        return input
    } else {
        return parseInt(input)
    }
}

