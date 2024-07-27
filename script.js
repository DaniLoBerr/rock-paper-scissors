function playGame() {

  // Game UI
  const gameContainer = document.querySelector("#game-container");
  const choiceQuestion = document.querySelector("#choice-question");

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

}

// Initial UI
const startButton = document.querySelector("#start");
startButton.addEventListener("click", () => {
  playGame();
});
