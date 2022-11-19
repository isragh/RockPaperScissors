const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const hands = document.getElementById('hands');
const updateResult = document.getElementById('result');
const clean = document.getElementById('endGameButton');
const values = document.querySelectorAll('.rpsButton');

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

  if (score === 1) {
    playerScore.innerText = Number(playerScore.innerText) + score;
  } else if (score === -1) {
    computerScore.innerText = Number(computerScore.innerText) - score;
  }

  hands.innerText = `👱 ${playerChoice.value} vs 🤖 ${computerChoice}`;
}

function onClickRPS(playerChoice) {
  let computerChoice = getComputerChoice();
  let score = getResult(playerChoice.value, computerChoice);
  showResult(score, playerChoice, computerChoice);
}

function playGame() {
  values.forEach(value => value.onclick = () => onClickRPS(value));

  clean.onclick = () => endGame();
}

function endGame() {
  playerScore.innerText = 0;
  computerScore.innerText = 0;
  updateResult.innerText = '';
  hands.innerText = '';
}

playGame();
