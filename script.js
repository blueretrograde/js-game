


//ACESSING MY COMPONENTS

    //Game title
    const title = document.querySelector(".game__title")
    //Main Background(Display & Answer buttons)
    const gameBackground = document.querySelector(".game__background")
    //Display (Question Display Screen)
    const questionDisplay = document.querySelector(".game__display")
    //The actual question text
    const gameQuestion = document.querySelector(".game__question")
    //The answer buttons & Next and Start buttons (the whole div)
    const gameButtons = document.querySelector(".game__buttons")
    //An "All Selector" for the four answer buttons
    const gameButtonArray = document.querySelectorAll(".game__button")
    //The Next Question Button
    const nextQuestion = document.querySelector(".game__button--nextquestion")
    //The Start/Restart button
    const startButton = document.querySelector(".game__button--start")

    //Answer button 1, 2, 3 & 4
    const answerButton1 = document.querySelector(".game__button--1")
    const answerButton2 = document.querySelector(".game__button--2")
    const answerButton3 = document.querySelector(".game__button--3")
    const answerButton4 = document.querySelector(".game__button--4")
    
    //Audio
    const audio = document.querySelector(".game__soundtrack")

    //Individual button selectors
    answerButton1.classList.add("hide")
    answerButton2.classList.add("hide")
    answerButton3.classList.add("hide")
    answerButton4.classList.add("hide")
    nextQuestion.classList.add("hide")


//QUESTIONS (imported from questions.js file)

    //@import here
    import {questionsArray} from "./questions/questions.js"



//DOM STYLING

    //princess image

    const princess = document.querySelector(".princess__image")
    princess.classList.add("princess")

    //title & start button styling
    nextQuestion.classList.add("font-family", "nextQuestion")
    startButton.classList.add("font-family", "nextQuestion")
    title.style.fontFamily = "Silkscreen";
    





//   !!!---------F U N C T I O N S-----------!!!


let randomQuestion;
let currentQuestionIndex;

//to remove class correct & wrong 

    const clearStatusClass = (button) => {
        button.classList.remove("correct")
        button.classList.remove("wrong")
    
    }

//to add correct or wrong class depending on whether the answer is correct or wrong

    const setStatusClass = (button, correct) => {
        clearStatusClass(button)
            if(correct) {
                button.classList.add("correct")
            } else {
                button.classList.add("wrong")
            }
    }
    
        
//to reset questions (to treat next question as new)

    const resetQuestion = () => {
        clearStatusClass(document.body)

        nextQuestion.classList.add("hide")
        nextQuestion.classList.add("nextQuestion")
            }



//function when an answer is clicked
    
const clickAnswer = (e) => {
    
    nextQuestion.classList.remove("hide")
    

    

    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)

    gameButtonArray.forEach(button => {
        
        // setStatusClass(selectedButton, button.dataset.correct) //bug
        
    })
    
    //proceed to the next question or else change Start to Restart etc.

    if (randomQuestion.length > currentQuestionIndex + 1) {
        nextQuestion.classList.remove("hide")
    } else {
        nextQuestion.classList.add("hide")
        startButton.classList.remove("hide")
        startButton.innerText = "Restart"

        const restartSound = () => {
            audio.currentTime = 0
        }

        startButton.addEventListener("click", restartSound )
    }

}


//to generate the questions as text; to display on corresponding buttons etc

const generateQuestion = (question) => { 

    resetQuestion()

    //change the inner text to the question text
    gameQuestion.innerText = question.question

    
    //change the answers inner text
    question.answers.forEach((answer, index) => {
        
            gameButtonArray[index].classList.remove("hide")
            return gameButtonArray[index].innerText = answer.text
    

    } )
}

//to get the next question

const getNextQuestion = () => {
    
    resetQuestion()
    generateQuestion(randomQuestion[currentQuestionIndex])

}

//function to increase the current question index by 1

const getNextRandomQuestion = () => {

    currentQuestionIndex++
    getNextQuestion()

}


//function to start the game (when the Start button is clicked)

const startGame = () => { 

    startButton.classList.add("hide")
    nextQuestion.classList.remove("hide")
    princess.classList.add("hide")

    audio.play();
    audio.volume = 0.1;


    randomQuestion = questionsArray.sort(() => Math.random() -.5)
    currentQuestionIndex = 0

    getNextQuestion()

}



//EVENT LISTENERS

//Start Button to hide after being clicked
startButton.addEventListener("click", startGame)

//Next Button to generate next question
nextQuestion.addEventListener("click", getNextRandomQuestion) 

//Game Buttons 
gameButtonArray.forEach((button)=> {
    button.addEventListener("click", clickAnswer)
})



//---------------------------END OF CODE------------------------------------




// const checkAnswer = () => {

//     if(answer.correct) {
//         selectedButton.classList.add("correct")
//     } else {
//         selectedButton.classList.add("wrong")}
// }