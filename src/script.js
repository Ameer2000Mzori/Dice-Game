// selecting elements
const diceImgEl = document.getElementsByClassName("dice-Img")[0];
const playersCurrentsTitlesTexts = document.querySelectorAll(".player-1-T-T-3");
////buttons selecte
const restartBtn = document.getElementsByClassName("restart-Btn")[0];
const rollDiceBtn = document.getElementsByClassName("roll-Dice-Btn")[0];
const holdBtn = document.getElementsByClassName("hold-Btn")[0];
//player one selected
const playerLeft = document.getElementsByClassName("player-Left")[0];
const player1PointCurrent = document.getElementsByClassName(
  "player-1-Point-Current"
)[0];
const player1PointCount = document.getElementsByClassName(
  "player-1-Point-Count"
)[0];
//player two selected
const playerRight = document.getElementsByClassName("player-Right")[0];
const player2PointCurrent = document.getElementsByClassName(
  "player-2-Point-Current"
)[0];
const player2PointCount = document.getElementsByClassName(
  "player-2-Point-Count"
)[0];

// gelobal variables
let playerOne = true;
let playerTwo = false;
let pOneTotalPoints = 0;
let pOneCurrentPoints = 0;
let pTwoTotalPoints = 0;
let pTwoCurrentPoints = 0;

// functions
////roll Dice Function
const rollDice = () => {
  if (pOneTotalPoints >= 100 || pTwoTotalPoints >= 100) {
    playerWon();
  } else {
    // create random number between 1-6
    let randNum = Math.round(Math.random() * 5) + 1;
    console.log(randNum);
    ////show that number to the screen
    diceImgEl.style.backgroundImage = `url(./assets/dice-${randNum}.png)`;
    //////check if the player gets 1 or not if ues then give it to other player
    changePlayerCheck(randNum);
  }
};

// player change Playing function
const changePlayerCheck = (randNum) => {
  randNum === 1
    ? changePlayerLogic()
    : playerOne
    ? pOnePlaying(randNum)
    : pTwoPlaying(randNum);
};

// player one playing function
const pOnePlaying = (randNum) => {
  pOneCurrentPoints += randNum;
  console.log("player one playing");
  player1PointCurrent.textContent = `${pOneCurrentPoints}`;
};

// player Two playing function
const pTwoPlaying = (randNum) => {
  pTwoCurrentPoints += randNum;
  console.log("player Two playing");
  player2PointCurrent.textContent = `${pTwoCurrentPoints}`;
};

// Hold Points Function
const holdPoint = () => {
  playerOne ? holdPlayerOne() : holdPlayerTwo();
};

//player one points holder
const holdPlayerOne = () => {
  pOneTotalPoints += pOneCurrentPoints;
  player1PointCount.textContent = `${pOneTotalPoints}`;
  changePlayerLogic();
};

//player Two points holder
const holdPlayerTwo = () => {
  pTwoTotalPoints += pTwoCurrentPoints;
  player2PointCount.textContent = `${pTwoTotalPoints}`;
  changePlayerLogic();
};

// change the game logic
const changePlayerLogic = () => {
  if (playerOne) {
    pOneCurrentPoints = 0;
    player1PointCurrent.textContent = `${pOneCurrentPoints}`;
    playerOne = false;
    playerTwo = true;
    playerLeft.classList.remove("active");
    playerRight.classList.add("active");
  } else {
    pTwoCurrentPoints = 0;
    playerOne = true;
    playerTwo = false;
    player2PointCurrent.textContent = `${pTwoCurrentPoints}`;
    playerLeft.classList.add("active");
    playerRight.classList.remove("active");
  }
};

// player won
const playerWon = () => {
  pOneTotalPoints >= 100
    ? (playersCurrentsTitlesTexts[0].textContent =
        "PLAYER One WON THE GAME PRESS RESTART")
    : (playersCurrentsTitlesTexts[1].textContent =
        "PLAYER Two WON THE GAME PRESS RESTART");
  disableButtons();
};

// disable buttons function
const disableButtons = () => {
  rollDiceBtn.disabled = true;
  holdBtn.disabled = true;
};

// enable buttons function
const enableButtons = () => {
  rollDiceBtn.disabled = false;
  holdBtn.disabled = false;
};

// restart game function
const restartGame = () => {
  playerLeft.classList.add("active");
  playerRight.classList.remove("active");
  playerOne = true;
  playerTwo = false;
  pOneTotalPoints = 0;
  pOneCurrentPoints = 0;
  player1PointCurrent.textContent = `${pOneCurrentPoints}`;
  player1PointCount.textContent = `${pOneTotalPoints}`;
  pTwoTotalPoints = 0;
  pTwoCurrentPoints = 0;
  player2PointCount.textContent = `${pTwoTotalPoints}`;
  player2PointCurrent.textContent = `${pTwoCurrentPoints}`;
  enableButtons();
  playersCurrentsTitlesTexts[0].textContent = "CURRENT";
  playersCurrentsTitlesTexts[1].textContent = "CURRENT";
};

// event listners
rollDiceBtn.addEventListener("click", rollDice);
holdBtn.addEventListener("click", holdPoint);
restartBtn.addEventListener("click", restartGame);
