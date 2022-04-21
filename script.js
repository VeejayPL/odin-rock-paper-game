// Adding UI
const newGameButton = document.querySelector("#newGame");
const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", () => playRound("rock"));
const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", () => playRound("paper"));
const scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", () => playRound("scissors"));

const paraConsoleLogComp = document.querySelector("#consoleLogComputer");
const paraConsoleLogPlayer = document.querySelector("#consoleLogPlayer");
const paraResultPlayer = document.querySelector("#resultPlayer");
const paraResultComputer = document.querySelector("#resultComputer");
const paraRoundResult = document.querySelector("#roundResult");

let result = " ";
let playerScore = 0;
let computerScore = 0;

// Random computer play
function computerPlay() {
  const compChoice = Math.floor(Math.random() * 3);

  switch (compChoice) {
    case 0:
      paraConsoleLogComp.textContent = "Computer has chosen: scissors!";
      return "scissors";

    case 1:
      paraConsoleLogComp.textContent = "Computer has chosen: paper!";
      return "paper";

    case 2:
      paraConsoleLogComp.textContent = "Computer has chosen: rock!";
      return "rock";
  }
}
// Game - 1 round
function playRound(playerSelection) {
  const computerSelection = computerPlay();

  paraConsoleLogPlayer.textContent = `You have chosen ${playerSelection}!`;
  paraRoundResult.textContent = "Round result...";

  switch (true) {
    case playerSelection === "rock" && computerSelection === "rock":
      result = "It's a tie!";
      break;
    case playerSelection === "rock" && computerSelection === "paper":
      result = "You loose! Paper beats rock.";
      break;
    case playerSelection === "rock" && computerSelection === "scissors":
      result = "You win! Rock beats scissors.";
      break;
    case playerSelection === "paper" && computerSelection === "rock":
      result = "You win! Paper beats rock.";
      break;
    case playerSelection === "paper" && computerSelection === "paper":
      result = "It's a tie!";
      break;
    case playerSelection === "paper" && computerSelection === "scissors":
      result = "You loose! Scissors beat paper.";
      break;
    case playerSelection === "scissors" && computerSelection === "rock":
      result = "You loose! Rock beats scissors.";
      break;
    case playerSelection === "scissors" && computerSelection === "paper":
      result = "You win! Scissors beat paper.";
      break;
    case playerSelection === "scissors" && computerSelection === "scissors":
      result = "It's a tie!";
      break;
  }
  // Score
  switch (true) {
    case result === "You win! Rock beats scissors." ||
      result === "You win! Paper beats rock." ||
      result === "You win! Scissors beat paper.":
      paraRoundResult.textContent = `You score 1!`;
      playerScore += 1;
      paraResultPlayer.textContent = `Player score: ${playerScore}`;
      break;
    case result === "You loose! Paper beats rock." ||
      result === "You loose! Scissors beat paper." ||
      result === "You loose! Rock beats scissors.":
      paraRoundResult.textContent = `Computer scores 1!`;
      computerScore += 1;
      paraResultComputer.textContent = `Computer score: ${computerScore}`;
      break;
    case result === "It's a tie!":
      paraRoundResult.textContent = `It's a tie!`;
      break;
  }
  // Final score
  if (playerScore == 5) {
    paraRoundResult.textContent = `Congratulations!!
        You have won!!
        Your score: ${playerScore}
        Computer score: ${computerScore}`;
    computerScore = 0;
    playerScore = 0;
  } else if (computerScore == 5) {
    paraRoundResult.textContent = `You've lost!!
        Maybe next time :)
        Your score: ${playerScore}
        Computer score: ${computerScore}
        `;
    computerScore = 0;
    playerScore = 0;
  }
}
