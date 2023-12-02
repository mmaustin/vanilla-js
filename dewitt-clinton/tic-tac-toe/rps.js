

const userScoreDisplay = 0;
const compScoreDisplay = 0;

const userScore = document.getElementById("user-score");
const compScore = document.getElementById("computer-score");
const scoreBoard = document.querySelector('.score-board');
const result = document.querySelector('.result');
const rock = document.getElementById('r');
const paper = document.getElementById('p');
const scissors = document.getElementById('s');

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  console.log(choices[Math.floor(Math.random() * choices.length)]);
}

function game(userChoice) {
  console.log(userChoice);
}

function main() {
  rock.addEventListener('click', function () {
    game('r');
    getComputerChoice();
  });

  paper.addEventListener('click', function () {
    game('p');
    getComputerChoice();
  });

  scissors.addEventListener('click', function () {
    game('s');
    getComputerChoice();
  });
};
main();