/* Helper Functions */
function random(number) {
  return Math.floor(Math.random() * number + 1);
}

function capitalize(string) {
  return (
    string.toLowerCase().charAt(0).toUpperCase() + string.toLowerCase().slice(1)
  );
}
/* ************************ */

function getComputerSelection() {
  let computerNumber = random(3);
  let computerGuess = '';

  switch (computerNumber) {
    case 1:
      computerGuess = 'Rock';
      break;
    case 2:
      computerGuess = 'Paper';
      break;
    case 3:
      computerGuess = 'Scissors';
      break;
    default:
      break;
  }

  return computerGuess;
}

function getPlayerSelection() {
  let playerSelection = prompt('Rock, Paper or Scissors ?');
  playerSelection = capitalize(playerSelection);

  return playerSelection;
}

function playRound(playerSelection, computerSelection) {
  let log = '';

  if (playerSelection === 'Rock') {
    if (computerSelection === 'Paper') {
      log = 'You Lose! Paper beats Rock';
    } else if (computerSelection === 'Scissors') {
      log = 'You Win! Rock beats Scissors';
    } else {
      log = "It's a tie";
    }
  } else if (playerSelection === 'Paper') {
    if (computerSelection === 'Scissors') {
      log = 'You Lose! Scissors beats Paper';
    } else if (computerSelection === 'Rock') {
      log = 'You Win! Paper beats Rock';
    } else {
      log = "It's a tie";
    }
  } else if (playerSelection === 'Scissors') {
    if (computerSelection === 'Rock') {
      log = 'You Lose! Rock beats Scissors';
    } else if (computerSelection === 'Paper') {
      log = 'You Win! Scissors beats Paper';
    } else {
      log = "It's a tie";
    }
  }

  return log;
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let computerSelection = getComputerSelection();
    let playerSelection = getPlayerSelection();
    let roundResult = playRound(playerSelection, computerSelection);
    console.log(
      `Player: ${playerSelection} VS. Computer: ${computerSelection}`
    );
    console.log(roundResult);

    if (roundResult.search('You Win!') > -1) {
      playerScore++;
    } else if (roundResult.search('You Lose!')) {
      computerScore++;
    }
  }

  console.log('******** Final Results **********');
  console.log(
    `Player Score: ${playerScore} & Computer Score: ${computerScore}`
  );

  if (playerScore < computerScore) {
    console.log('You Lose!');
  } else if (playerScore > computerScore) {
    console.log('You Win!');
  } else {
    console.log("It's a tie");
  }
}

game();
