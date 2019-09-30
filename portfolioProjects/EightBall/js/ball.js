var username = 'Hunter' ;

username ? console.log(`Hello, ${username}!`) : 'Hello!';

console.log(username);

var userQuestion = 'Will I get a web dev job?';

console.log(`${username} asks, ${userQuestion}`);

var randomNumber = Math.floor(Math.random() * 8);

console.log(randomNumber);

function eightBallAnswer() {

  var randomNumber = Math.floor(Math.random() * 8);

var eightBall;

  switch(randomNumber) {
    case 0:
      eightBall = 'It is certain';
      break;
    case 1:
      eightBall = 'It is decidedly so';
      break;
    case 2:
      eightBall = 'Reply hazy, try again';
      break;
    case 3:
      eightBall = 'Cannot predict now';
      break;
    case 4:
      eightBall = 'Do not count on it';
      break;
    case 5:
      eightBall = 'My sources say no';
      break;
    case 6:
      eightBall = 'Outlook not so good';
      break;
    case 7:
      eightBall = 'Signs point to yes';
      break;
  }

      document.getElementById('answer').innerText = eightBall;
      console.log(eightBallAnswer);
  

      
  }



  
    document.getElementById('button').onclick = () => eightBallAnswer();

    function reset () {
      document.getElementById('question').value = '';
      document.getElementById('answer').innerText = '';
    }

    document.getElementById('reset').onclick = () => reset();
  