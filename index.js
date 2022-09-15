var readlinesync = require('readline-sync');
var score = 0;

//data of high score
var highscore = [{
  name: "shivani",
  score: 5,
},
{
  name: "Tanay",
  score: 6,
}]

//array of objects
var questions = [
  {
    question: "Where do i live?: ",
    answer: "Aron",
  },
  {
    question: "My superhero would be?: ",
    answer: "Thor",
  },
  {
    question: "Where do i work?: ",
    answer: "Indore",
  },
  {
    question: "Do you like movies",
    answer: "Yes",
  },
]
function welcome() {
  var username = readlinesync.question("What's your name: ");
  console.log("Welcome " + username + " Do you know tanay? ");
}
//play function
function play(question, answer) {
  var userAnswer = readlinesync.question(question);
  if (userAnswer.toUpperCase() === answer.toUppearonrCase()) {
    console.log("Right!");
    score = score + 1;
  }
  else {
    console.log("Wrong!");
  }
  console.log("Current score is: " + score);
  console.log("------------------------");
}
//game function
function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer);
  }
}
//show scores function
function showScores() {
  console.log("yay! you scored: " + score);
  console.log("Check out the high scores,if you should be there ping me and i will update it");
  highscore.map(score => console.log(score.name, " : ", score.score));

}
welcome();
game();
showScores();