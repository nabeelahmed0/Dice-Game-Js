let playerColorChange = document.querySelector("#player1");
let playerColorChange2 = document.querySelector("#player2");

let rollDice = document.querySelector("#rollDice");
let holdDice = document.querySelector("#holdDice");
let resetGame = document.querySelector("#resetGame");

let diceImage = document.querySelector("img");

let player1CurrentScoreUI = document.querySelector("#player1CurrentScoreUI");
let player2CurrentScoreUI = document.querySelector("#player2CurrentScoreUI");

let player1TotalScoreUI = document.querySelector("#player1TotalScoreUI");
let player2TotalScoreUI = document.querySelector("#player2TotalScoreUI");
let player1scr = 0;
let player2scr = 0;

let playerFirstTry = true;

let currentScore = 0;

playerColorChange.classList.add("active");

// All add eventlisnter

rollDice.addEventListener("click", function () {
  const randomNumber = Math.ceil(Math.random() * 6);
  //   console.log(randomNumber);
  diceImage.src = `./assets/${randomNumber}.png`;

  if (randomNumber === 1) {
    currentScore = 0;
    if (playerFirstTry) {
      player1CurrentScoreUI.textContent = currentScore;
      playerFirstTry = false;
    } else {
      player2CurrentScoreUI.textContent = currentScore;
      playerFirstTry = true;
    }

    playerColorChange.classList.toggle("active");
    playerColorChange2.classList.toggle("active");

    return;
  }
  if (playerFirstTry) {
    currentScore += randomNumber;
    player1CurrentScoreUI.textContent = currentScore;
  } else {
    currentScore += randomNumber;
    player2CurrentScoreUI.textContent = currentScore;
  }
});

holdDice.addEventListener("click", function () {
  if (playerFirstTry) {
    player1scr += currentScore;
    player1TotalScoreUI.textContent = player1scr;
    currentScore = 0;
    player1CurrentScoreUI.textContent = currentScore;
    if (player1scr >= 15) {
      alert("player 1 is Win");
      diceImage.src = "";
    }
    playerFirstTry = false;
  } else {
    player2scr += currentScore;
    player2TotalScoreUI.textContent = player2scr;
    currentScore = 0;
    player2CurrentScoreUI.textContent = currentScore;
    if (player2scr >= 15) {
      alert("player 2 is win");
      diceImage.src = "";
    }
    playerFirstTry = true;
  }

  playerColorChange.classList.toggle("active");
  playerColorChange2.classList.toggle("active");
});
resetGame.addEventListener("click", function () {
    alert("are you sure wanted a new game")
  diceImage.src = "";
  currentScore = 0;
  player1TotalScoreUI.innerHTML = currentScore;
  player2TotalScoreUI.innerHTML = currentScore;
  player1CurrentScoreUI.innerHTML = currentScore;
  player2CurrentScoreUI.innerHTML = currentScore;
});
