// selecting elements
const diceImgEl = document.getElementsByClassName("dice-Img")[0];
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
);
//player two selected
const playerRight = document.getElementsByClassName("player-Right")[0];
const player2PointCurrent = document.getElementsByClassName(
  "player-2-Point-Current"
)[0];
const player2PointCount = document.getElementsByClassName(
  "player-2-Point-Count"
);

// gelobal variables
let playerOne = true;
let playerTwo = false;
let pOneTotalPoints = 0;
let pOneCurrentPoints = 0;
let pTwoTotalPoints = 0;
let pTwoCurrentPoints = 0;

// functions
const rollDice = () => {
  // create random number between 1-6
  let randNum = Math.round(Math.random() * 5) + 1;
  console.log(randNum);
  ////show that number to the screen
  diceImgEl.style.backgroundImage = `url(./assets/dice-${randNum}.png)`;
  //////the active player should have that number in current
  playerOne ? pOnePlaying() : pTwoPlaying();
};

// player one playing function
const pOnePlaying = () => {
  console.log("player one playing");
};

// player Two playing function
const pTwoPlaying = () => {
  console.log("player Two playing");
};

// event listners
rollDiceBtn.addEventListener("click", rollDice);
