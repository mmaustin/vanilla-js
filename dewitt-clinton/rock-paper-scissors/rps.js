
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

//Uses the global Math object to simulate a computer player by picking one of three choices from an array
function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  // Use Math.random() to get a number btw .1 and .9 then multiply that number by the length of the array or, in this case, 3.  Math.floor(), which rounds down, ensures that we will never get a number larger than 2.  As arrays are 0 index based, choices[0] === 'r'; choices[1] === 'p'; choices[2] === 's'
  // .1 to .3 will get you 0; .4 to .6 will get you 1; .7 to .9 will get you 2
  return choices[Math.floor(Math.random() * choices.length)];
};


//The game function, or whatever you call it, is where you want to compare your input and the computer's input--after having called the function that gets you the computer input;
//You do not have to have the same functionality as I do.  I use concatenation to help with my comparison, but there are many ways to go about this.
//You're going to use if or if/else statements for your comparison.
function game(userChoice) {
  //Stored the result of getComputerChoice into a constant variable
  const computerChoice = getComputerChoice();
  //Concatenated userChoice and computerChoice and stored the result in a variable
  let choices = userChoice + computerChoice;

  if (choices === 'rs' || choices === 'pr' || choices === 'sp') {
    //roundResult handles DOM manipulation after each round and calls a function to check if there's a winner.
    roundResult('User', choices);
  };
  if (choices === 'rp' || choices === 'ps' || choices === 'sr') {
    roundResult('Computer', choices);
  };
  if (choices === 'rr' || choices === 'pp' || choices === 'ss') {
    roundResult('Draw');
  };
};

//Clicking an icon invokes the attached event listener whose callback function then calls the game function. game takes in one argument, the first letter of the icon.
//You want to write functions for each separate piece of functionality.  You can write out the functionality of the game function inside of the event listener callback, but that can eventually lead to cluttered, confusing code.
rock.addEventListener('click', function () {
  game('r');
});

paper.addEventListener('click', function () {
  game('p');
});

scissors.addEventListener('click', function () {
  game('s');
});






