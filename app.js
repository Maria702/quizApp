var startButton = document.getElementById("start-btn")
var nextButton = document.getElementById("next-btn")

var questionContainerElement = document.getElementById("question-container")

var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-button')
var shuffledQuestions,  currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', ()=>{
    currentQuestionIndex++
    setNextQuestion()
 })


function startGame(){
    console.log('started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5) 
    currentQuestionIndex = 0 
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
   
    
}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer =>{
        var button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}
function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])

}
function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e){
    var selectedButton = e.target
    var correct= selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button =>(
        setStatusClass(button, button.dataset.correct)
    ))

    if(shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide')
    }
    else{
        startButton.innerText= 'Restart'
        startButton.classList.remove('hide')
    }
    
    
}
function  setStatusClass(element , correct){
    clearStatusClass(element)
        if(correct){
          element.classList.add('correct')
        }
        else{
            element.classList.add('wrong')
        }
    }


function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
var questions =[
    {
        question: 'What is the color of mango ?',
        answers :[
            { text : 'Red' ,correct: false},
            { text : 'Green' ,correct: false},
            { text : 'Yellow' ,correct: true},
            { text : 'blue' ,correct: false},

        ]
    },
    {
        question: 'Who is the presidet of Pakistan nowadays ?',
        answers :[
            { text : 'Imran Khan' ,correct: false},
            { text : 'Arif Alvi' ,correct: true},
            { text : 'Saeed Ghani' ,correct: false},
            { text : 'Sheikh Rasheed' ,correct: false},

        ]  

    },
    {
        question: 'What is the national Sport of Pakistan ?',
        answers :[
            { text : 'Cricket' ,correct: true},
            { text : 'Hockey' ,correct: false},
            { text : 'Vollyball' ,correct: false},
            { text : 'None of them' ,correct: false},

        ]  

    },
    {
        question: 'Which letter comes between X and Z ?',
        answers :[
            { text : 'W' ,correct: false},
            { text : 'T' ,correct: false},
            { text : 'X' ,correct: false},
            { text : 'Y' ,correct: true},

        ]  

    },
    {
        question: 'Ears are used to  ?',
        answers :[
            { text : 'See' ,correct: false},
            { text : 'Talk' ,correct: false},
            { text : 'Taste' ,correct: false},
            { text : 'Hear' ,correct: true},

        ]  

    },
]


