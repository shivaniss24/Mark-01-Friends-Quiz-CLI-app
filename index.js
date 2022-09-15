var readlineSync = require("readline-sync");

var score = 0;



// array of objects
var questions = [
  {
  question: "what is my surname: ",
  answer: "soni"
},
  {
  question: "What is my nick name: ",
  answer: "bittu"
},
                {
  question: "When is my birthday: ",
  answer: "24th may"
},
                  
                 
  {
  question: "Which is my favourite place: ",
  answer: "kashmir"
},
                 
{
  question: "My favorite superhero is: ",
  answer: "Thor"
},
{
  question: "What i am doing now a days: ",
  answer: "levelzero"
},
                 
  {
  question:"Where do i live?: ",
  answer:"Aron",
  },
  
  {
    question:"Do you like movies",
    answer:"Yes",
  }
  {
  question: "Which is my favourite movie: ",
  answer: "kashmir-files"
},
                 
                
];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " to do you Knowkno Shivani?");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();

