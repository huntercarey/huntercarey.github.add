//IIFE -  Immediately Invoked Function Expression

//IIFE run as soon as they are defined. (don't have to be called)

//IIFE are commonly used to keep variables/functions outside of the global scope and they tend to work better if you're running multiple scripts

(function() {

//Make references to our elements that we're going to interact with
var quizContainer = document.getElementById('quiz');
var submitButton = document.getElementById('submit');
var resetButton = document.getElementById('reset');
var resultsContainer = document.getElementById('results');

//ARRAY TO HOLD QUESTIONS
var myQuestions = [];


//QUESTIONS AND THEIR PROPERTIES
var question0 = {
    question: 'Who feels that All Might\'s retirement is a consequence of his/her weakness?',
    answers: {
        a: 'Midoryia Izuku',
        b: 'Aizawa Shouta',
        c: 'Bakugo Katsuki'

    }, correctAnswer: 'c'
};

var question1 = {
    question: 'Which of Deku\'s smashes creates wind pressure through his fingers?',
    answers: {
        a: 'Delaware',
        b: 'Detroit',
        c: 'New Hampshire'
    },
    correctAnswer: 'a'
};

//Adding the question objects into our array
myQuestions.push(question0, question1);

//Function to generate HTML for each question
const buildQuiz = () => {



for (var question = 0; question < myQuestions.length; question++) {
    var label = document.createElement('label');
    label.innerText = myQuestions[question].question;
    quizContainer.appendChild(label); 
}
}





    }());
