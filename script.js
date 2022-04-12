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

  switch (compChoice) {
    case 0:
      console.log("Computer has chosen: scissors!");
      return "scissors";

    case 1:
      console.log("Computer has chosen: paper!");
      return "paper";

    case 2:
      console.log("Computer has chosen: rock!");
      return "rock";
  }
}

// The variable askPlayer has to be inside the function - otherwise, everytime the page loads,
// window pops up

// Console log is needed for each case because when you run it in console in function game(),
// it does not show the result with just return. Placing return playround() in game() will make
// the game() run just once.

function playRound() {
  const askPlayer = prompt("Type your choice:", "paper / rock / scissors");
  const playerSelection = askPlayer.toLowerCase();
  const computerSelection = computerPlay();

  console.log(`You have chosen ${playerSelection}!`);

  switch (true) {
    case playerSelection === "rock" && computerSelection === "rock":
      console.log("It's a tie!");
      result = "It's a tie!";
      break;
    case playerSelection === "rock" && computerSelection === "paper":
      console.log("You loose! Paper beats rock.");
      result = "You loose! Paper beats rock.";
      break;
    case playerSelection === "rock" && computerSelection === "scissors":
      console.log("You win! Rock beats scissors.");
      result = "You win! Rock beats scissors.";
      break;
    case playerSelection === "paper" && computerSelection === "rock":
      console.log("You win! Paper beats rock.");
      result = "You win! Paper beats rock.";
      break;
    case playerSelection === "paper" && computerSelection === "paper":
      console.log("It's a tie!");
      result = "It's a tie!";
      break;
    case playerSelection === "paper" && computerSelection === "scissors":
      console.log("You loose! Scissors beat paper.");
      result = "You loose! Scissors beat paper.";
      break;
    case playerSelection === "scissors" && computerSelection === "rock":
      console.log("You loose! Rock beats scissors.");
      result = "You loose! Rock beats scissors.";
      break;
    case playerSelection === "scissors" && computerSelection === "paper":
      console.log("You win! Scissors beat paper.");
      result = "You win! Scissors beat paper.";
      break;
    case playerSelection === "scissors" && computerSelection === "scissors":
      console.log("It's a tie!");
      result = "It's a tie!";
      break;
    default:
      console.log(
        "Whooopsie, you have entered wrong value ;-)\nPlease try again!"
      );
      result = "Whooopsie, you have entered wrong value ;-)\nPlease try again!";
  }
}

let result = " ";

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    playRound();
    switch (true) {
      case result === "You win! Rock beats scissors." ||
        result === "You win! Paper beats rock." ||
        result === "You win! Scissors beat paper.":
        console.log(`You score 1! You'r total score = ${playerScore + 1}.`);
        playerScore += 1;
        break;
      case result === "You loose! Paper beats rock." ||
        result === "You loose! Scissors beat paper." ||
        result === "You loose! Rock beats scissors.":
        console.log(
          `Computer scores 1! Computer total score = ${computerScore + 1}`
        );
        computerScore += 1;
        break;
      case result === "It's a tie!":
        break;
      default:
        i--;
        break;
    }
  }
  switch (true) {
    case playerScore > computerScore:
      console.log(`
      Congratulations!!
      You have won!!
      Your score: ${playerScore}
      Computer score: ${computerScore}`);
      break;
    case playerScore < computerScore:
      console.log(`
      You've lost!!
      Maybe next time
      Your score: ${playerScore}
      Computer score: ${computerScore}
      `);
      break;
    case playerScore === computerScore:
      console.log(`
      It's a tie!!
      Your score: ${playerScore}
      Computer score: ${computerScore}
      `);
      break;
  }

  let reset = prompt("Would you like to play again?", "yes / no");

  switch (true) {
    case reset === "yes":
      playerScore = 0;
      computerScore = 0;
      game();
      break;
    case reset === "no":
      console.log("Thank you for your time");
      break;
  }
}
