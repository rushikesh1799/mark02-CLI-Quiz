var readlineSync = require("readline-sync");
var chalk = require('chalk');

var userName = readlineSync.question(chalk.yellowBright("What is your name? "));
console.log("");
console.log(chalk.greenBright(`Welcome ` + userName));
console.log("");

var score = 0;

const leaderBoard = [
  {
    name: "Rushi",
    score: 10
  },
  {
    name: "Pratik",
    score: 9
  },
  {
    name: "Pravin",
    score: 9
  }
]

var questions = [
  {
    //1
    question: "Who ruined Eren's equipment back in the trainee days ? ",
    options: [
      "Keith Shadis",
      "Jean",
      "Armin",
      "Reiner"
    ],
    correctAnswer: "keith shadis",
  },
  //2
  {
    question: "Grisha killed everyone in the Reiss family except for Rod Reiss, who escaped. ",
    options: [
      "True",
      "False"
    ],
    correctAnswer: "true",
  },
  //3
  {
    question: "What nickname was given to Erwin when he was a child ? ",
    options: [
      "Blondie",
      "Idiot",
      "Eyebrows",
      "Smartass"
    ],
    correctAnswer: "eyebrows",
  },
  //4
  {
    question: "Who snatched Marco's maneuvering gear ? ",
    options: [
      "Annie",
      "Reiner",
      "bertholdt",
      "Eren"
    ],
    correctAnswer: "annie",
  },
  //5
  {
    question: "Who tended to Levi's wounds after he was attacked by the First Interior Squad ? ",
    options: [
      "Armin",
      "Sasha",
      "Moblit",
      "Hange"
    ],
    correctAnswer: "sasha"
  },
  //6
  {
    question: "What did Carla do for living before she met Grisha ? ",
    options: [
      "Soldier",
      "Waitress",
      "Doctor",
      "Teacher"
    ],
    correctAnswer: "waitress"
  },
  //7
  {
    question: "Erwin was in love with a woman named Marie. ",
    options: [
      "False",
      "True"
    ],
    correctAnswer: "true"
  },
  //8
  {
    question: "Who killed Rod Reiss ? ",
    options: [
      "Mikasa",
      "Levi",
      "Eren",
      "Historia"
    ],
    correctAnswer: "historia"
  },
  //9
  {
    question: "How big was the biggest Titan ever seen ? ",
    options: [
      "120m",
      "50m",
      "60m",
      "100m"
    ],
    correctAnswer: "120m"
  },
  //10
  {
    question: "Who taught Annie how to fight ? ",
    options: [
      "Reiner",
      "Bertholdt",
      "Her Brother",
      "Her Father"
    ],
    correctAnswer: "her father"
  }
]

var score = 0;

function play(question, correctAnswer) {
  // var userAnswer = readlineSync.question(chalk.blue(question));

  if (questions[question]
    .options[correctAnswer].toLowerCase()
    ===
    questions[question].correctAnswer) {
    console.log(chalk.greenBright("Voila!, Correct"));
    score++;
  }
  else {
    console.log(chalk.red("uh oh, that's Wrong Answer"));
  }
  console.log(chalk.yellow("Your current Score is : " + score))
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    console.log(chalk.red.bold(questions[i].question))
    // var currentQuestion = questions[i];

    const userAnswerIndex = readlineSync.keyInSelect(
      questions[i].options,
      "Select any one Option from above", { cancel: false });
    console.log("")

    play(i, userAnswerIndex);
    console.log("------------------------------------------------------------------");
    console.log("");
  }
  showFinalScore()
}

function showFinalScore() {
  if (score >= 9) {
    console.log("")
    console.log(chalk.blueBright("YAY 🥳, Your Final Score is : " + score + " you have beaten the leaderboard, take a screenshot and send me! 😀"))
    console.log("")
  }
  else if (score > 5 && score < 9) {
    console.log("")
    console.log(chalk.blueBright("YAY 🥳, Your Final Score is : " + score + " you know Anime Attack on Titan quite well! 👍🏻"))
    console.log("")
  } else {
    console.log("")
    console.log(chalk.blueBright("Your Final Score is : " + score + " 😥 but no problem, you can reWatch this Beautiful Anime! 😀"))
    console.log("")
  }
}

function viewLeaderBoard() {
  console.log("LeaderBoard:")
  console.log("-----------------------------------------------")
  for (var i = 0; i < leaderBoard.length; i++) {
    console.log(`Rank ${i + 1} is ${chalk.yellow(leaderBoard[i].name)} with score = ${chalk.yellow(leaderBoard[i].score)}`)
  }
  console.log("-----------------------------------------------")
}

console.log(chalk.blue("Lets see how well do you know about Anime 'Attack on Titan'"))
console.log("")
console.log("Would you like to play the game or only see the leaderboard ?")
console.log("")
const gameOrSee = readlineSync.question("Type G for game and L for leaderboard: ");

if (gameOrSee.toLowerCase() === "g") {
  console.log("")
  game();
  console.log("")
} else {
  console.log("")
  viewLeaderBoard();
  console.log("")
}

// viewLeaderBoard();
