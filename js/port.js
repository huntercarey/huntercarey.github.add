(function(){
    var imgBox = document.getElementById('imgBox');
    var aboutBox = document.getElementById('aboutImgBox');
    var projectLink = document.getElementById('projectLink');

    //BUTTONS
    var eightBallButton = document.getElementById('eightBall');
    var tipCalculatorButton = document.getElementById('tipCalc');
    var businessSiteButton = document.getElementById('businessSite');
    var quizSiteButton = document.getElementById('quiz');
    var firstProjectButton = document.getElementById('firstProject');
    var toDoListButton = document.getElementById('toDoList');
    var liveClockButton = document.getElementById('liveClock');
    var backToMeButton = document.getElementById('backToMe');
    

    var aboutText = document.createElement('h1');
    aboutText.innerText = 'ABOUT ME';
    // aboutText.style.position = 'relative';
    aboutText.style.textAlign = 'center';
    aboutBox.appendChild(aboutText);
    var aboutParagraph = document.createElement('h2');
    aboutParagraph.innerText = 'When I discovered web development, I discovered a life long career..';
    aboutBox.appendChild(aboutParagraph);
    var aboutParagraph2 = document.createElement('p');
    aboutParagraph2.innerText ='From PC repair, restaurants and customer service, to most recently, the food manufacturing industry at T.Marzetti, My journey through the workforce has taught me how to attend to customer needs, complete projects, and cooperate with a team to optimize quality and productivity. While I have grown greatly through these experiences, it would be a lie to say that I have found my passion in these past endeavors. Until I started buliding websites, that is. Growing up in the rural Glasgow area of Kentucky, there was never a lot of emphasis in the technology industry. Always being the contrary teenager that I was, I first found myself drawn to this elusive industry in the form of PC repair. I was drawn to technology because it is always changing and allowed for me to continuously learn. Although I eventually realized that I would rather create than repair. So when i got the chance to learn development and use my love of both writing and technology to create innovative tools for all different types of users, I jumped in head first and have enjoyed every second of it ever since. My name is Hunter Carey, and to explore my most recent projects created using HTML, CSS and JavaScript, click the buttons in the Projects folder and enjoy!';
    aboutBox.appendChild(aboutParagraph2);
    
    

    //Picture
    var picture = document.createElement('img');
    picture.src = 'pics/profilePic.png';
    imgBox.appendChild(picture);
    projectLink.setAttribute('href', 'https://www.linkedin.com/in/huntercarey');
    



    //EIGHTBALL
    function getEightBall() {
        picture.src = 'pics/eightBall.png';
        picture.alt = 'my Magic Eightball website homepage'
        aboutText.innerText = "Magic Eightball";
        aboutParagraph.innerText = 'Ask the wise magic eightball and you shall recieve guidance..';
        aboutParagraph2.innerText ='This project was my second experience with implementing JavaScript into a website to enhance interactiveness. Using a random number generator along with switch statments, this virtual eightball will answer your burning questions at its own discretion while responding with some of the iconic and vague magic eightball answers. I had a lot of fun with the CSS involved in this project. I learned a lot about creating shapes, giving them depth, and positioning. Using my html knowledge to create containers, I was able to experiement with keeping my elements concentrated so that when I implement design through CSS, the process goes smoothly and as intended.';
        projectLink.setAttribute("href", "portfolioProjects/EightBall/html/eightball.html");

    }

     eightBallButton.addEventListener('click', getEightBall);


     //TIP CALC
     function getTipCalculator() {
         picture.src ='pics/tipCalc.png';
         picture.alt = 'my tip calculator website homepage'
         aboutText.innerText ='Tip Calculator'; 
         aboutParagraph.innerText = 'Who is on the other side of this screen with the calculator?!';
         aboutParagraph2.innerText ='Thankfully, not me! In this project I learned how to let JavaScript do the math for you. The CSS involved in my calculator served as a journey into styling user input while the JavaScript allowed me to use YOUR input in my pre-built functions. We all know how much our bill is, as well as the quality of our service, but what number exactly do those two factors come out to be? Input your information into the tip calculator and let it do the work for you!';
         projectLink.setAttribute("href", "portfolioProjects/Tip_Calculator/html/calc.html");
     }
     
     tipCalculatorButton.addEventListener('click', getTipCalculator);


     //BUSINESS SITE
     function getBusinessSite() {
        picture.src ='pics/businessPage.png';
        picture.alt = 'my Business Site website homepage'
        aboutText.innerText ='Mock Business Page'; 
        aboutParagraph.innerText = 'Basic in practice yet integral to potential..';
        aboutParagraph2.innerText ='At this point in my training I felt confident about creating a web page.. as long as it only had one page. Learning how to navigate between pages was a small step at the time, but has proved to have taught me the possibilities of a web page. My favorite part of this project was designing the buttons which allow you to navigate from the HOME page to the ABOUT page and then back again! Using :HOVER in CSS to create responsiveness that let the user know that this element can be clicked and invites them to explore. The business I chose to represent with this is the Japanese manga magazine, Weekly Shonen Jump. One of my all time favorites in story telling.';
        projectLink.setAttribute("href", "portfolioProjects/Multi_Page_Business_Site/html/about.html");
    }
    
    businessSiteButton.addEventListener('click', getBusinessSite);



    //QUIZ
    function getQuiz() {
        picture.src ='pics/quiz.png'; 
        picture.alt = 'Interactive Quiz'
        aboutText.innerText ='QUIZ'; 
        aboutParagraph.innerText = 'How many licks does it really take..?';
        aboutParagraph2.innerText ='Replace the word \'licks\' with development projects and \'to get to the center of a tootsie pop\' with becomimg a master developer and, the answer is actually the same. The world may never know. But it doesn\'t hurt to keep creating! This project (as well as this portfolio site) highlights my ability to create and alter HTML elements through JavaScript. Take my short quiz and allow the interactive and responsive code to let you know how well you did!';
        projectLink.setAttribute("href", "portfolioProjects/QUIZ/html/quiz.html");
    }
    
    quizSiteButton.addEventListener('click', getQuiz);



    //FIRST PROJECT
    function getFirstProject() {
        picture.src ='pics/firstWebsite.png'; 
        picture.alt = 'First Project'
        aboutText.innerText ='My First Website'; 
        aboutParagraph.innerText = 'We all have to start somewhere..';
        aboutParagraph2.innerText ='Beginning to understand the basics of HTML and CSS, I created a page utilizing unordered lists to tell you a few things about myself as well as images wrapped with anchor tags to allow you to click and learn more about the movies that have influenced me.';
        projectLink.setAttribute("href", 'portfolioProjects/First_Project/index.html');
    }
    
    firstProjectButton.addEventListener('click', getFirstProject);



    //TODO LIST
    function getToDoList() {
        picture.src ='pics/toDoList.png'; 
        picture.alt = 'my to do list website homepage'
        aboutText.innerText ='To Do List'; 
        aboutParagraph.innerText = 'I\'ve got so many responsibilities I can\'t even keep track of them all!';
        aboutParagraph2.innerText ='This is the first project that I learned to use linear gradients to create some unique color combinations for the background of my website. The JavaScript fueled text input and submit button will place all of your responsibilities into a nice and tidy list for you. Just click the \'X\' to the right of your task and watch it disappear as you feel relieved to have one less thing to worry about.';
        projectLink.setAttribute("href", 'portfolioProjects/toDo_list/html/toDo.html');
    }
    
    toDoListButton.addEventListener('click', getToDoList);



    //LIVE CLOCK
    function getLiveClock() {
        picture.src ='pics/clock.png'; 
        picture.alt = 'Live Date Clock';
        aboutText.innerText ='Date Clock'; 
        aboutParagraph.innerText = 'It is TIME for some JavaScript!';
        aboutParagraph2.innerText ='Using the built-in DATE object in JavaScript, I created a live clock that will keep you up with the current time and date. Feel free to check out my LinkedIn and GitHub profiles by clicking the buttons in the top two corners!';
        projectLink.setAttribute("href", 'portfolioProjects/Javascript_Clock/html/clock.html');
    }
    
    liveClockButton.addEventListener('click', getLiveClock);



    //BACK TO ME
    function getBackToMe() {
        picture.src ='pics/profilePic.png'; 
        aboutText.innerText ='ABOUT ME'; 
        aboutParagraph.innerText = 'When I discovered web development, I discovered a life long career..';
        aboutParagraph2.innerText ='From PC repair, restaurants and customer service, to most recently, the food manufacturing industry at T.Marzetti, My journey through the workforce has taught me how to attend to customer needs, complete projects, and cooperate with a team to optimize quality and productivity. While I have grown greatly through these experiences, it would be a lie to say that I have found my passion in these past endeavors. Until I started buliding websites, that is. Growing up in the rural Glasgow area of Kentucky, there was never a lot of emphasis in the technology industry. Always being the contrary teenager that I was, I first found myself drawn to this elusive industry in the form of PC repair. I was drawn to technology because it is always changing and allowed for me to continuously learn. Although I eventually realized that I would rather create than repair. So when i got the chance to learn development and use my love of both writing and technology to create innovative tools for all different types of users, I jumped in head first and have enjoyed every second of it ever since. My name is Hunter Carey, and to explore my most recent projects created using HTML, CSS and JavaScript, click the buttons on the left of the screen and enjoy!';
        projectLink.setAttribute('href', 'https://www.linkedin.com/in/huntercarey')
    }
    
    backToMeButton.addEventListener('click', getBackToMe);

}());


//test