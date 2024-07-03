/*
1. Create the game "Rock, Paper, Scissors".
    1.1. It will be a console game (no GUI).
    1.2. The game will consist of a game in which the first to reach 5 points between a user and the machine wins.
    1.3. The inputs that the program will have will be a string entered by a user through the keyboard.
    1.4. The outputs are going to be:
        1.4.1. A message of presentation of the game.
        1.4.2. A message for the user to enter his choice.
        1.4.3. A message with the result of the round.
        1.4.4. A message with the current overall score.
        1.4.5. A message with the overall winner.

2. The general operation of the game will be:
    2.1. Display a game presentation message on the console.
    2.2. Display an input for the user to enter his choice.
    2.3. The machine makes its own choice.
    2.4. Compare the choices of both.
    2.5. Display a console message about who has won the round.
    2.6. Display the current overall score of the game.
    2.7. Repeat the above steps until one of the players reaches 5 points.
    2.8. Display a final message about who has won the game.

3. Steps to follow:
  
  3.1. Write the logic for the machine's choice.
  3.2. Write the logic for the user's choice.
  3.3. Declare the variables of the opponents' scoreboard.
  3.4. Write the logic for a single-round game.
  3.5. Write the logic for the full game.

*/


// Step 1: MACHINE CHOICE LOGIC

// Create a new function named "getComputerChoice".
function getComputerChoice() {

  // Write the code so this function randomly returns one of the following string values: "rock", "paper", "scissors".

    // Create a variable named "computerChoice" to store the computer's choice.
    // Initialize it with a random numeric value between 0 and 99.
  let computerChoice = Math.random() * 100;
  
    // Create a condition where:
      // If the random number value is between 0 and 33, the variable computerChoice is assigned the value "rock".
      // If the random number value is between 34 and 66, the variable computerChoice is assigned the value "paper".
      // If the random number value is between 67 and 99, the variable computerChoice is assigned the value "scissors".
  if (computerChoice <= 33) {
    computerChoice = "rock";
  } else if (computerChoice > 33 && computerChoice <= 66) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  
    // Return the variable "computerChoice".
  return computerChoice;
}


// Step 2: USER CHOICE LOGIC

// Create a new function named "getHumanChoice".
function getHumanChoice() {

  // Write the code so this function returns the user choice data.
  return prompt("What's your choice?");
}


// Step 3: PLAYERS SCORE VARIABLES

// Declare two variables named "humanScore" and "computerScore" in the global scope to keep track of the players score.
// Initialize them with the value of 0.
let humanScore = 0;
let computerScore = 0;


// Step 4: SINGLE ROUND LOGIC

// Create a new function named "playRound".
// Define two parameters for "playRound": "humanChoice" and "computerChoice". Use these two parameters to take the human and computer choices as arguments.
function playRound(computerChoice, humanChoice) {

// Make this function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
  humanChoice.toLowerCase();

// Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
  // Make a condition for the following cases:
    // If the user choice isn't valid (computer wins).
    // If the user and computer tie.
    // If the user wins.
    // If the computer wins.
// Increment the humanScore or computerScore variable based on the round winner.
  if (
    humanChoice !== "rock" && 
    humanChoice !== "paper" && 
    humanChoice !== "scissors"
  ) {
    ++computerScore;
    return(console.log(`You lose! ${humanChoice} isn't a valid choice.`));
  } else if (humanChoice === computerChoice){
    return(console.log(`It's a tie!`));
  } else if (
    ((humanChoice === "rock") && (computerChoice === "scissors")) ||
    ((humanChoice === "paper") && (computerChoice === "rock")) ||
    ((humanChoice === "scissors") && (computerChoice === "paper"))
  ) {
    ++humanScore;
    return(console.log(`You win! ${humanChoice} beats ${computerChoice}.`));
  } else {
    ++computerScore;
    return(console.log(`You lose! ${computerChoice} beats ${humanChoice}.`));
  }
}