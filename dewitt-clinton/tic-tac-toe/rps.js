

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

function roundResult(winner, combo) {
  if (winner === 'User') {
    let newUserScore = parseInt(userScore.innerHTML) + 1;
    userScore.innerHTML = newUserScore.toString();
    result.innerHTML = combinations[combo];

  } else if (winner === 'Computer') {
    let newCompScore = parseInt(compScore.innerHTML) + 1;
    compScore.innerHTML = newCompScore.toString();
    result.innerHTML = combinations[combo];
  } else {
    result.innerHTML = 'That Round Was A Draw.';
    setTimeout(() => {
      result.innerHTML = 'Let\'s Play!'
    }, 1500);
  }
};

function game(userChoice) {
  const computerChoice = getComputerChoice();
  if (userChoice + computerChoice === 'rs' || userChoice + computerChoice === 'pr' || userChoice + computerChoice === 'sp') {
    roundResult('User', userChoice + computerChoice);
  }
  if (userChoice + computerChoice === 'rp' || userChoice + computerChoice === 'ps' || userChoice + computerChoice === 'sr') {
    roundResult('Computer', userChoice + computerChoice);
  }
  if (userChoice + computerChoice === 'rr' || userChoice + computerChoice === 'pp' || userChoice + computerChoice === 'ss') {
    roundResult('Draw');
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





