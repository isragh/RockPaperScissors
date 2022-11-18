const playerScore = document.getElementById('player-score');
const hands = document.getElementById('hands');
const updateResult = document.getElementById('result');
const clean = document.getElementById('endGameButton');

function getComputerChoice() {
  let choices = ['Rock', 'Paper', 'Scissors'];
  let computer = choices[Math.floor(Math.random() * 3)];
  return computer;
}

function getResult(playerChoice, computerChoice) {
  let score;

  if (playerChoice === computerChoice) {
    score = 0;
  } else if (playerChoice === 'Rock' && computerChoice === "Scissors") {
    score = 1;
  } else if (playerChoice === 'Scissors' && computerChoice === "Paper") {
    score = 1;
  } else if (playerChoice === 'Paper' && computerChoice === "Rock") {
    score = 1;
  } else score = -1;

  console.log(score);
  return score;
}

function showResult(score, playerChoice, computerChoice) {
  switch (score) {
    case -1:
      updateResult.innerText = 'You Lose!';
      break;
    case 1:
      updateResult.innerText = 'You Won!';
      break;
    case 0:
      updateResult.innerText = `It's a Draw!`;
      break;
  }

  playerScore.innerText = Number(playerScore.innerText) + score;

  hands.innerText = `👱 ${playerChoice.value} vs 🤖 ${computerChoice}`;
  console.log(playerChoice);
}

function onClickRPS(playerChoice) {
  let computerChoice = getComputerChoice();
  let score = getResult(playerChoice.value, computerChoice);
  showResult(score, playerChoice, computerChoice);
}

function playGame() {
  const values = document.querySelectorAll('.rpsButton');
  values.forEach(value => value.onclick = () => onClickRPS(value));

  clean.onclick = () => endGame();
}

function endGame() {
  playerScore.innerText = '';
  updateResult.innerText = '';
  hands.innerText = '';
}

playGame();