
let userScore = document.getElementById("user-score");
let compScore = document.getElementById("computer-score");
const result = document.querySelector('.result');
const rock = document.getElementById('r');
const paper = document.getElementById('p');
const scissors = document.getElementById('s');


const combinations = {
  "pr": "Paper Covers Rock. You Win The Round!",
  "rs": "Rock Crushes Scissors. You Win The Round!",
  "sp": "Scissors Cut Paper. You Win The Round!",
  "rp": "Paper Covers Rock. Computer Wins The Round!",
  "ps": "Scissors Cut Paper. Computer Wins The Round!",
  "sr": "Rock Crushes Scissors. Computer Wins The Round!"
};

function gameWinner(score, player) {
  if (score === '5' && player === 'User') {
    result.style.backgroundColor = 'green';
    result.innerHTML = 'You Beat The Computer!';
    setTimeout(() => {
      userScore.innerHTML = '0';
      compScore.innerHTML = '0';
      result.innerHTML = 'Let\'s Play!';
      result.style.backgroundColor = '#24272e';
    }, 5000);
  };

  if (score === '5' && player === 'Computer') {
    result.style.backgroundColor = 'red';
    result.innerHTML = 'The Computer Stomped You!';
    setTimeout(() => {
      userScore.innerHTML = '0';
      compScore.innerHTML = '0';
      result.innerHTML = 'Let\'s Play!';
      result.style.backgroundColor = '#24272e';
    }, 5000);
  };
};


function roundResult(winner, combo) {
  if (winner === 'User') {
    userScore.innerHTML++
    result.innerHTML = combinations[combo];
    gameWinner(userScore.innerHTML, 'User');

  } else if (winner === 'Computer') {
    compScore.innerHTML++
    result.innerHTML = combinations[combo];
    gameWinner(compScore.innerHTML, 'Computer');
  } else {
    result.innerHTML = 'That Round Was A Draw.';
    setTimeout(() => {
      result.innerHTML = 'Let\'s Play!'
    }, 1000);
  };
};


function getComputerChoice() {
  const choices = ['r', 'p', 's'];

  return choices[Math.floor(Math.random() * choices.length)];
};



function game(userChoice) {

  const computerChoice = getComputerChoice();

  let choices = userChoice + computerChoice;

  if (choices === 'rs' || choices === 'pr' || choices === 'sp') {

    roundResult('User', choices);
  };
  if (choices === 'rp' || choices === 'ps' || choices === 'sr') {
    roundResult('Computer', choices);
  };
  if (choices === 'rr' || choices === 'pp' || choices === 'ss') {
    roundResult('Draw');
  };
};


rock.addEventListener('click', function () {
  game('r');
});

paper.addEventListener('click', function () {
  game('p');
});

scissors.addEventListener('click', function () {
  game('s');
});






