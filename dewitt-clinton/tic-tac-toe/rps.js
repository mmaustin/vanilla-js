

const userScoreDisplay = 0;
const compScoreDisplay = 0;

const userScore = document.getElementById("user-score");
const compScore = document.getElementById("computer-score");
const scoreBoard = document.querySelector('.score-board');
const result = document.querySelector('.result');
const rock = document.getElementById('r');
const paper = document.getElementById('p');
const scissors = document.getElementById('s');


const combinations = {
  "pr": "Paper Covers Rock. You Win!",
  "rs": "Rock Crushes Scissors. You Win!",
  "sp": "Scissors Cut Paper. You Win!",
  "rp": "Paper Covers Rock. Computer Wins!",
  "ps": "Scissors Cut Paper. Computer Wins!",
  "sr": "Rock Crushes Scissors. Computer Wins!"
};

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  return choices[Math.floor(Math.random() * choices.length)];
};

function win(winner, combo) {
  if (winner === 'User') {
    let newUserScore = parseInt(userScore.innerHTML) + 1;
    userScore.innerHTML = newUserScore.toString();
    result.innerHTML = combinations[combo];

  } else if (winner === 'Computer') {
    let newCompScore = parseInt(compScore.innerHTML) + 1;
    compScore.innerHTML = newCompScore.toString();
    result.innerHTML = combinations[combo];
  } else {
    result.innerHTML = 'That Round Was A Draw.'
  }
};

function game(userChoice) {
  const computerChoice = getComputerChoice();
  if (userChoice + computerChoice === 'rs' || userChoice + computerChoice === 'pr' || userChoice + computerChoice === 'sp') {
    win('User', userChoice + computerChoice);
  }
  if (userChoice + computerChoice === 'rp' || userChoice + computerChoice === 'ps' || userChoice + computerChoice === 'sr') {
    win('Computer', userChoice + computerChoice);
  }
  if (userChoice + computerChoice === 'rr' || userChoice + computerChoice === 'pp' || userChoice + computerChoice === 'ss') {
    win('Draw');
  }
};

// function main() {
rock.addEventListener('click', function () {
  game('r');
});

paper.addEventListener('click', function () {
  game('p');
});

scissors.addEventListener('click', function () {
  game('s');
});
// };
// main();





