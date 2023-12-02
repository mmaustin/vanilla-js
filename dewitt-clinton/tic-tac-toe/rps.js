

const userScoreDisplay = 0;
const compScoreDisplay = 0;

const userScore = document.getElementById("user-score");
const compScore = document.getElementById("computer-score");
const scoreBoard = document.querySelector('.score-board');
const result = document.querySelector('.result');
const rock = document.getElementById('r');
const paper = document.getElementById('p');
const scissors = document.getElementById('s');

function game(userChoice) {
  console.log(userChoice);
}

function main() {
  rock.addEventListener('click', function () {
    game('r');
  });

  paper.addEventListener('click', function () {
    game('p');
  });

  scissors.addEventListener('click', function () {
    game('s');
  });
};
main();