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

  // Round result message
  const roundResultMessage = document.createElement("p");
  roundResultMessage.textContent = "";
  gameContainer.appendChild(roundResultMessage);

  // Game result message
  const gameResultMessage = document.createElement("p");
  gameResultMessage.textContent = "";
  gameContainer.appendChild(gameResultMessage);

}

// Initial UI
const startButton = document.querySelector("#start");
startButton.addEventListener("click", () => {
  playGame();
});
