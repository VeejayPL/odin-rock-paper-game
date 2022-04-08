// Rock Paper Scissors game
// Plan:
// No interface, just console
// User will type in prompt box one out of three options
// Computer randomly generates value out of three options
// Desired output is to display the score for computer and user
//
// Pseudocode:
// User inputs a string
// Computer generates randomly a string out of three choices
// If user has a rock and computer has scissors - user scores
// If user has a paper and computer has rock - user scores
// If a user has scissors and computer has paper - user scores
// If user and computer has the same value - tie
// The score is saved in variable
// Game lasts five rounds

// To have the random string, asign the string to number - then random number

function computerPlay() {
  const compChoice = Math.floor(Math.random() * 3);

  switch (true) {
    case compChoice === 0:
      console.log("Computer has chosen: scissors!");
      return "scissors";
      break;
    case compChoice === 1:
      console.log("Computer has chosen: paper!");
      return "paper";
      break;
    case compChoice === 2:
      console.log("Computer has chosen: rock!");
      return "rock";
      break;
  }
}

// The variable askPlayer has to be inside the function - otherwise, everytime the page loads,
// window pops up

function playRound() {
  const askPlayer = prompt("Type your choice:", "paper / rock / scissors");
  const playerSelection = askPlayer.toLowerCase();
  const computerSelection = computerPlay();

  console.log(`You have chosen ${playerSelection}!`);

  switch (true) {
    case playerSelection === "rock" && computerSelection === "rock":
      return "It's a tie!";
      break;
    case playerSelection === "rock" && computerSelection === "paper":
      return "You loose! Paper beats rock.";
      break;
    case playerSelection === "rock" && computerSelection === "scissors":
      return "You win! Rock beats scissors.";
      break;
    case playerSelection === "paper" && computerSelection === "rock":
      return "You win! Paper beats rock.";
      break;
    case playerSelection === "paper" && computerSelection === "paper":
      return "It's a tie!";
      break;
    case playerSelection === "paper" && computerSelection === "scissors":
      return "You loose! Scissors beat paper.";
      break;
    case playerSelection === "scissors" && computerSelection === "rock":
      return "You loose! Rock beats scissors.";
      break;
    case playerSelection === "scissors" && computerSelection === "paper":
      return "You win! Scissors beat paper.";
      break;
    case playerSelection === "scissors" && computerSelection === "scissors":
      return "It's a tie!";
      break;
    default:
      return "Whooopsie, you have entered wrong value ;-)\nPlease try again!";
  }
}
