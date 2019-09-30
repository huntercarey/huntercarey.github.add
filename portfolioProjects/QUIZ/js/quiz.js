// IIFE - Immediately Invoked Function Expression

//IIFE run as soon as they are defined. (don't have to be called)

//IIFE are commonly used to keep variables/functions outside of the global scope and they tend to work better if you're running multiple scripts

//This variable exists in the global scope, which means it's less secure and can be accessed by anything
var global;

(function() {
    //Because this variable is inside of an IIFE, it is not in the global scope
    var variable = 10;

    //Make references to our elements that we're going to interact with
    var quiz = document.getElementById('quiz');
    var submit = document.getElementById('submit');
    var reset = document.getElementById('reset');
    var results = document.getElementById('results');

    var myQuestions = []

    //What does a question consist of?
    //Question text
    //Answer choices
    //Correct answer

    var question1 = {
        question: 'What color is the sky?',
        answers: {
            a: 'Blue',
            b: 'Brown',
            c: 'Green'
        },
        correctAnswer: 'a'

    }

    var question2 = {
        question: 'How many licks does it take to get to the center of a tootsie-pop?',
        answers: {
            a: '3000',
            b: '0',
            c: 'The world may never know'
        },
        correctAnswer: 'c'
    }

    var question3 = {
        question: 'The more you take, the more you leave behind. What am I?',
        answers: {
            a: 'space',
            b: 'footsteps',
            c: 'time'
        },
        correctAnswer: 'b'
    }

    myQuestions.push(question1, question2, question3); //Add the question objects to our array

    //Function to build a quiz that goes through our question objects and generates HTML for each question
    function buildQuiz() {
        //We need to go through each of our question objects and use them to build out the html to show a question

        for (var i = 0; i < myQuestions.length; i++){
            //Create a display for the question text
            //Creating a new div called questionDiv that will hold information about a single question
            var questionDiv = document.createElement('div');
            //Get the question text from the question we are looking at with this iteration of the for loop.
            questionDiv.innerText = myQuestions[i].question;
            
            //Display the answer choices (and take user input to select an answer)


            //Creating a div to hold the question's answers
            var answersDiv = document.createElement('div');

            //Configure
            answersDiv.classList.add('answers');

            //A for IN loop is used to specifically go through properties of an object
            for (letter in myQuestions[i].answers) {
                //Create a label for the radio button input
                var label = document.createElement('label');

                //Create a radio button for each answer
                var input = document.createElement('input');

                //Configure the input
                input.type = 'radio';
                input.name = 'question' + [i];
                input.value = letter;

                var br = document.createElement('br');

                
                label.appendChild(br);

                label.appendChild(input);

                


                //Create some text from the current letter we're looking at and the corresponding answer for that letter
                var labelText = document.createTextNode(`${letter}: ${myQuestions[i].answers[letter]} `);
                

                //Add text to the label
                label.appendChild(labelText);

                //Add the label to the answersDiv
                answersDiv.appendChild(label);
            }

            //Once all the answers are added, add the answerDiv to the questionDiv
            questionDiv.appendChild(answersDiv);


            //Add the questionDiv to the quiz div
            quiz.appendChild(questionDiv);
            
        
            
        }

    }

    buildQuiz();


    //Function to show the results of the quiz
    function showResults() {
        //Get all the answer containers from our quiz
        var answerContainers = quiz.querySelectorAll('.answers'); //This will basically give us back an array containing everything in the quizContainer with the class 'answers'

        //Variable to keep track of how many they got right
        var numCorrect = 0;

        for (var i = 0; i < answerContainers.length; i++) {
           //Get the current answer container we're looking at for the group.
           answerContainer = answerContainers[i];
           
           var selector = `input[name=question${i}]:checked`;

           //Try to find the selected answer in the container and print out the value
           var userAnswer = (answerContainer.querySelector(selector) || {}).value; //If it can't find a selected input for a question, querySelector will give back null. If it does, use

           if (userAnswer === myQuestions[i].correctAnswer) {
               //They got it right!
               //Change the text color of the elements to green
               numCorrect += 1;
               answerContainer.style.color = 'green';
               
           } else {
               //They got  it wrong :(
                   //Change the color of the text to red
                   answerContainer.style.color = 'red';
           }

        }
        //Add text to the results container to show how many they got right
        results.innerText = `You got ${numCorrect} out of ${myQuestions.length}!`

    }


submit.addEventListener('click', showResults);

    // function to reset the quiz
    function resetQuiz() {
        //Clear out what is in the reults container
        results.innerText = '';
        //Clear out the quiz container
        quiz.innerHTML = '';
        //Rebuild the quiz
        buildQuiz();
    }
    reset.addEventListener('click', resetQuiz);
}());