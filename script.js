/*
1. Create the game "Rock, Paper, Scissors".
    1.1. It will be a console game (no GUI).
    1.2. The game will consist of a best of 5 rounds game between a user and the machine.
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
    2.7. Repeat the above steps 4 more times.
    2.8. Display a final message about who has won the game.

3. Steps to follow:
  
  3.1. Write the logic for the machine's choice.
  3.2. Write the logic for the user's choice.
  3.3. Declare the variables of the opponents' scoreboard.
  3.4. Write the logic for a single-round game.
  3.5. Write the logic for the full game (5 rounds).

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
