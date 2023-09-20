const quizData = [
    {
        question: "What is the capital of Japan?",
        choices: ["Tokyo", "Seoul", "Beijing"],
        correct: "Tokyo"
    },
    {
        question: "Which gas do plants primarily absorb from the atmosphere?",
        choices: ["Carbon Monoxide", "Oxygen", "Carbon Dioxide"],
        correct: "Carbon Dioxide"
    },
    {
        question: "What is the largest mammal in the world?",
        choices: ["Elephant", "Blue Whale", "Giraffe"],
        correct: "Blue Whale"
    },
    {
        question: "What is the symbol for the chemical element 'Gold'?",
        choices: ["Go", "Gd", "Au"],
        correct: "Au"
    },
    {
        question: "Which planet is known as the 'Morning Star' or 'Evening Star'?",
        choices: ["Venus", "Mars", "Mercury"],
        correct: "Venus"
    },
    {
        question: "Which famous scientist developed the theory of relativity?",
        choices: ["Isaac Newton", "Albert Einstein", "Galileo Galilei"],
        correct:  "Albert Einstein"
    },
    {
        question: "In which year did the Titanic sink on its maiden voyage?",
        choices: ["1902", "1912", "1922"],
        correct: "1902"
    },
    {
        question: "What is the largest planet in our solar system?",
        choices: ["Mars", "Jupiter", "Saturn"],
        correct: "Jupiter"
    },
    {
        question: "Which natural disaster is measured on the Richter scale?",
        choices: ["Tornado", "Earthquake", "Hurricane"],
        correct: "Earthquake"
    },
    {
        question: "What is the chemical symbol for water?",
        choices: ["H2O", "CO2", "O2"],
        correct: "H2O"
    }
];
 //score
 let score=document.getElementById('score');
 score.innerText=0;
let indexNumber=0;
//display qn & choices
function questionShown(){
let question=document.getElementById('question');
question.innerText=quizData[indexNumber].question;
let choices=document.getElementById('choices');
choices.innerHTML='';
for(i=0;i<quizData[indexNumber].choices.length;i++){
    choices.innerHTML+=`<li style="list-style: none;">
    <input type="radio" name="choose">${quizData[indexNumber].choices[i]}</li>`}
}
questionShown()
//scorecount
function scorecount() {
    let selectedChoice = document.querySelector('input[name="choose"]:checked')
    console.log(selectedChoice)
    if(selectedChoice && selectedChoice.value === quizData[indexNumber].correct){
        score.innerText+=10;
    }
}
//click next for next qn
function nextqn(){
    indexNumber++;
    questionShown();
    scorecount();
}
nextqn()
