
const games = ["Rock", "Paper", "Scissors"];
var computerPoints = 0;
var yourPoints = 0; 
var tie = 0; 

paperBtn.addEventListener('click', () => handleClick('Paper'));
rockBtn.addEventListener('click', () => handleClick('Rock'));
scissorsBtn.addEventListener('click', () => handleClick('Scissors'));

function handleClick(playerSelect) {
    playerSelection = playerSelect;
}

const result = document.querySelector('#result');
const gameInfo = document.querySelector('#info');
const buttons = document.querySelectorAll("button");
const playerScoreElement = document.querySelector("#your-points");
const computerScoreElement = document.querySelector("#computer-points");
const tiesScoreElement = document.querySelector("#ties-points");
const textResult = document.querySelector("#txt-result");
const playAgainButton = document.querySelector("#playagain-btn");

function getComputerChoice() {
    return games[Math.floor(Math.random() * games.length)];
}

var computerSelection = getComputerChoice();

playAgainButton.style.display = "none";

const restartGame = () => {
    location.reload();
}

playAgainButton.addEventListener("click", restartGame);



buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const playerChoice = event.target.getAttribute("id");
      playRound(playerSelection, getComputerChoice());
    });
  });

// Choices comparisons
function playRound(playerSelection, computerSelection) {
    if (yourPoints === 5 || computerPoints === 5 || tie === 5) return; //This stops the game when reaching to 5
            if ((computerSelection === "Paper" && playerSelection === "Rock") ||
                (computerSelection === "Scissors" && playerSelection === "Paper") ||
                (computerSelection === "Rock" && playerSelection === "Scissors") && 
                (computerPoints <= 5 || yourPoints <= 5)) {
                 computerPoints++;
                 textResult.textContent = "Computer Wins";
                 computerScoreElement.textContent = `${computerPoints}`;
            } else if ((computerSelection === "Rock" && playerSelection === "Paper") ||
                      (computerSelection === "Paper" && playerSelection === "Scissors") ||
                      (computerSelection === "Scissors" && playerSelection === "Rock") &&
                      (yourPoints <= 5 && computerPoints <= 5)) {
                         yourPoints++;
                         textResult.textContent = "You win";
                         playerScoreElement.textContent = `${yourPoints}`;
            } else if ((computerSelection === playerSelection) &&
                       (yourPoints <= 5 && computerPoints <= 5)) {
                         tie++;
                         textResult.textContent = "it's a tie";
                         tiesScoreElement.textContent = `${tie}`;
            } else {
                return "not valid";
            }

            if (computerPoints === 5) {
                textResult.textContent = "YOU'VE BEEN BEATED BY A COMPUTER";
             } else if (yourPoints === 5) {
                textResult.textContent ="YOU ARE THE CHAMPIONS!";
           } else if (tie === 5) {
               textResult.textContent ="IT'S A TIE!!";
        } 
        if (yourPoints === 5 || computerPoints === 5 || tie === 5) {
            playAgainButton.style.display = "block";
        }
        }

    //      if (computerPoints === 5) {
    //         textResult.textContent = "YOU'VE BEEN BEATED BY A COMPUTER";
    //      } else if (yourPoints === 5) {
    //         textResult.textContent ="YOU ARE THE CHAMPIONS!";
    //    } textResult.textContent ="IT'S A TIE!!";
    

   


        //Play 5 rounds game
        //Keep score
        //Report Winner and loser at the end