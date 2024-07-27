function playGame() {
  // Game UI
  const gameContainer = document.querySelector("#game-container");
  const choiceQuestion = document.querySelector("#choice-question");

  // Choice buttons
  const rockButton = document.createElement("button");
  rockButton.classList.add("choice-button");
  rockButton.setAttribute("id", "rock");
  rockButton.textContent = "Rock";

  const paperButton = document.createElement("button");
  paperButton.classList.add("choice-button");
  paperButton.setAttribute("id", "paper");
  paperButton.textContent = "Paper";

  const scissorsButton = document.createElement("button");
  scissorsButton.classList.add("choice-button");
  scissorsButton.setAttribute("id", "scissors");
  scissorsButton.textContent = "Scissors";

  choiceQuestion.textContent = "What's your choice?";
  gameContainer.removeChild(startButton);
  gameContainer.appendChild(rockButton);
  gameContainer.appendChild(paperButton);
  gameContainer.appendChild(scissorsButton);

  // Scoreboard
  const scoreboard = document.createElement("p");
  let userScore = 0;
  let computerScore = 0;
  scoreboard.textContent = `User ${userScore} - ${computerScore} Computer`;
  gameContainer.appendChild(scoreboard);

  // User Choice
  let userChoice = "";

  // Computer choice
  function getComputerChoice() {
    // Create a random number between 0 y 99 to assign the result number to one valid option
    computerChoice = Math.random() * 100;
    
    if (computerChoice <= 33) computerChoice = "rock";
    if (computerChoice > 33 && 
      computerChoice <= 66) computerChoice = "paper";
    if (computerChoice > 66) computerChoice = "scissors";
    
    return computerChoice;
  }

  // Round result message
  const roundResultMessage = document.createElement("p");
  roundResultMessage.textContent = "";
  gameContainer.appendChild(roundResultMessage);

  // Game result message
  const gameResultMessage = document.createElement("p");
  gameResultMessage.textContent = "";
  gameContainer.appendChild(gameResultMessage);

  // Single round logic
  function playRound(userChoice, computerChoice) {
    if (userChoice === computerChoice){
      roundResultMessage.textContent = "It's a tie!";
  
    } else if (
      ((userChoice === "rock") && (computerChoice === "scissors")) ||
      ((userChoice === "paper") && (computerChoice === "rock")) ||
      ((userChoice === "scissors") && (computerChoice === "paper"))
    ) {
      ++userScore;
      scoreboard.textContent = `User ${userScore} - ${computerScore} Computer`;
      roundResultMessage.textContent = `You win this round! ${userChoice} beats ${computerChoice}.`;
  
    } else {
      ++computerScore;
      scoreboard.textContent = `User ${userScore} - ${computerScore} Computer`;
      roundResultMessage.textContent = `You lose this round... ${computerChoice} beats ${userChoice}.`;
    }
  }

  function checkFinalResult() {
    if (userScore === 5 || computerScore === 5) {
      gameContainer.removeChild(roundResultMessage);
      gameContainer.removeChild(rockButton);
      gameContainer.removeChild(paperButton);
      gameContainer.removeChild(scissorsButton);
    }
    if (userScore === 5) gameResultMessage.textContent =
      "You win the game!! Congrats, you're the master of this game!";
    if (computerScore === 5) gameResultMessage.textContent =
      "You lose the game... Sorry, maybe next time.";
  }

  const choiceOptions = document.querySelectorAll(".choice-button");
  choiceOptions.forEach((button) => {
    button.addEventListener("click", () => {
      userChoice = button.id;
      playRound(userChoice, getComputerChoice());
      checkFinalResult();
    })
  });
}

// Initial UI
const startButton = document.querySelector("#start");
startButton.addEventListener("click", () => {
  playGame();
});
