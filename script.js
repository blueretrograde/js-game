
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


//AN OBJECT OF QUESTIONS WITH EACH ITEM CONTAINING AN ARRAY OF 4 ANSWERS
//(different js file for that)
    //@import here

    import {questionsArray} from "./questions/questions.js"

console.log(questionsArray[0])

//click events for Start Game, Next, Restart(at the end of game)

const startGame = () => { 
    
    console.log("Game Started")
    startButton.classList.add("hide")
    

}


const getNextQuestion = () => {

}

const restartGame = () => {

}

// const clickAnswer = () => {

// }

//functions for Correct Answer, Wrong answer, Win, Loss



//function to reset the game 




//function to proceed to the next question




//next question to be disabled till you get the anser right



//Event Listeners

startButton.addEventListener("click", startGame)