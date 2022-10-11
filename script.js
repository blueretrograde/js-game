


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

//DOM INTERACTION STYLING

//princess image

const princess = document.querySelector(".princess__image")
princess.classList.add("princess")

//title & start button styling

startButton.classList.add("font-family")
title.style.fontFamily = "Silkscreen";
//Functions for Start Game, Next Question, Restart(at the end of game)


    let randomQuestion;
    let currentQuestionIndex;

    answerButton1.classList.add("hide")
    answerButton2.classList.add("hide")
    answerButton3.classList.add("hide")
    answerButton4.classList.add("hide")
    nextQuestion.classList.add("hide")


        //---------

    const clearStatusClass = (element) => {
        element.classList.remove("correct")
        element.classList.remove("wrong")
    
    }


    const setStatusClass = (element, correct) => {
        clearStatusClass(element)
        if(correct) {
            element.classList.add("correct")
        } else {
            element.classList.add("wrong")
        }
    }
    
        

    const resetQuestion = () => {
        clearStatusClass(document.body)
        nextQuestion.classList.add("hide")
        nextQuestion.classList.add("nextQuestion")
            while (gameButtonArray.firstChild) {
                gameButtonArray.removeChild(gameButtonArray.firstChild) //Next Question problem?
            }
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
    

    const getNextQuestion = () => {
        resetQuestion()
        generateQuestion(randomQuestion[currentQuestionIndex])
    
    }


    
    
    const getNextRandomQuestion = () => {
        currentQuestionIndex++
        getNextQuestion()
    }


    const startGame = () => { 
        startButton.classList.add("hide")
        nextQuestion.classList.remove("hide")
        princess.classList.add("hide")

        //to randomise the question order (positive & negative numbers)
        randomQuestion = questionsArray.sort(() => Math.random() -.5)
        currentQuestionIndex = 0

        getNextQuestion()
    }



const clickAnswer = (e) => {

    nextQuestion.classList.remove("hide")
   

    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)

    Array.from(gameButtons.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    

    if (randomQuestion.length > currentQuestionIndex + 1) {
    nextQuestion.classList.remove("hide")
    } else {
        startButton.innerText = "Restart"
        startButton.classList.remove("hide")
    }

}





//!!!!next question to be disabled till you get the answer right



//EVENT LISTENERS

//Start Button to hide after being clicked
startButton.addEventListener("click", startGame)

//Next Button to generate next question
nextQuestion.addEventListener("click", getNextRandomQuestion) 

