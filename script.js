
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


//AN OBJECT OF QUESTIONS WITH EACH ITEM CONTAINING AN ARRAY OF 4 OBJECTS AS ANSWERS
//(different js file for that)

    //@import here
    import {questionsArray} from "./questions/questions.js"

//Functions for Start Game, Next Question, Restart(at the end of game)


    let randomQuestion;
    let currentQuestionIndex;

    nextQuestion.classList.add("game__button")
    startButton.classList.add("game__button")

    nextQuestion.style.textAlign = "center";
    startButton.style.textAlign = "center";





    const startGame = () => { 
        
        startButton.classList.add("hide")

        //to randomise the question order (positive & negative numbers)
        randomQuestion = questionsArray.sort(() => Math.random() -.5)
        currentQuestionIndex = 0

        getNextQuestion()
    }



const getNextQuestion = () => {
    resetQuestion()
    generateQuestion(randomQuestion[currentQuestionIndex])

}

const generateQuestion = (question) => { 

    resetQuestion()

    //change the inner text to the question text
    gameQuestion.innerText = question.question

    //change the answers inner text
    question.answers.forEach(answer => {

    const button = document.createElement("button")
    button.innerText = answer.text
    button.classList.add("game__button")


    if (answer.correct) { 
        button.dataset.correct = answer.correct
    }

    button.addEventListener("click", clickAnswer)
    gameButtons.appendChild(button)
        

    } )
}


const resetQuestion = () => {
    nextQuestion.classList.add("hide")
        while (gameButtons.firstChild) {
            gameButtons.removeChild
            (gameButtons.firstChild)
        }
}


const restartGame = () => {

}

const clickAnswer = (event) => {

}

//functions for results [ Correct Answer, Wrong answer, Win, Loss ]



//!!!!next question to be disabled till you get the answer right



//EVENT LISTENERS

//Start Button to hide after being clicked
    startButton.addEventListener("click", startGame)