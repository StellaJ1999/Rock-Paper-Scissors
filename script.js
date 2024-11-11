document.addEventListener("DOMContentLoaded", () => {
    let playerPoints = 0;
    let computerPoints = 0;


    const intro = document.querySelector('.intro');
    const gameWindow = document.querySelector('.game-window');
    const startBtn = document.querySelector('.start-game');

    displayPlayerPoints = document.getElementById('player-points');
    displayComputerPoints = document.getElementById('computer-points');

    const rockBtn = document.querySelector('.rock');
    const paperBtn = document.querySelector('.paper');
    const scissorBtn = document.querySelector('.scissors');

   const computerOutput = document.getElementById('computer-output');
   const playerOutput = document.getElementById('player-output');
    const result = document.getElementById('result');

    let gameActive = false;

    function gameIntro () {
        if (!gameActive) {
            intro.style.display = "flex";
            gameWindow.style.display = "none";
        }
    }

    gameIntro ();

    function gameInit() {
        
        gameActive = true;
        intro.style.display = "none";
        gameWindow.style.display = "flex";
        resetGame();
    }

    startBtn.addEventListener('click', function() {
        gameInit();
    });

    function computerPlay() {
        let computerChoice = ["Rock", "Paper", "Scissor"];
        return computerChoice[Math.floor(Math.random() * computerChoice.length)];
    }


    function playRound(playerChoice) {

        if (!gameActive) return;

        const computerChoice = computerPlay();
        computerOutput.innerHTML = computerChoice;
        playerOutput.innerHTML = playerChoice;

       if (playerChoice === computerChoice) {

        result.innerHTML = "It's a draw, try again!";

       } else if (

            (playerChoice === "Rock" && computerChoice === "Scissor") ||
            (playerChoice === "Paper" && computerChoice === "Rock") ||
            (playerChoice === "Scissor" && computerChoice === "Paper")

        ) {
            playerPoints++;
            result.innerHTML = "You got a point!";
        } else {
            computerPoints++;
            result.innerHTML = "Computer got a point.";
        }

        updateScore();
        checkWinner();

    };

    function updateScore () {
        displayPlayerPoints.textContent = `Points: ${playerPoints}`;
        displayComputerPoints.textContent = `Points: ${computerPoints}`;
    }

    function checkWinner () {
        if (playerPoints === 3){
            result.innerHTML = 'Congratulations, you are the winner!';
            endGame();
        } else if (computerPoints === 3) {
            result.innerHTML = 'Computer wins!';
            endGame();
        }
    };

    function endGame () {
        gameActive = false;

        setTimeout(() => {
            alert('The game is over. Refresh the page to start a new game.');
            intro();
        }, 1000);
    };

    function resetGame() {
        computerPoints = 0;
        playerPoints = 0;
    
        displayComputerPoints.textContent = `Points: ${computerPoints}`;
        displayPlayerPoints.textContent = `Points: ${playerPoints}`;
    
        computerOutput.innerHTML = '';
        playerOutput.innerHTML = '';
        result.innerHTML = '';
    };

    rockBtn.addEventListener('click', () => playRound("Rock"));
    paperBtn.addEventListener('click',() => playRound("Paper"));
    scissorBtn.addEventListener('click',() => playRound("Scissor"));
});