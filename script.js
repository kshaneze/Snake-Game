'use strict';
/// Create canvas where i will play the game

/// Create canvas where i will play the game

const board_border = 'rgb(18, 145, 184)';
const board_background = 'black';
const snake_col = 'lightblue';
const snake_border = 'darkblue';
const score = document.querySelector('.score-number');

let snake = [
  { x: 400, y: 300 },
  { x: 390, y: 300 },
  { x: 380, y: 300 },
  { x: 370, y: 300 },
  { x: 360, y: 300 },
];

let dx = 10;
let dy = 0;
let changing_direction = false;
let foodX;
let foodY;
let currentscore = 0;
const snakeBoard = document.getElementById('canvas');
const snakeBoardCtx = snakeBoard.getContext('2d');
snakeBoard.width = 800;
snakeBoard.height = 600;

/////////////////////////////////////////////////
// creating and clearing the board
const clearBoard = function () {
  snakeBoardCtx.fillStyle = board_background;
  snakeBoardCtx.strokestyle = board_border;
  snakeBoardCtx.fillRect(0, 0, snakeBoard.width, snakeBoard.height);
  snakeBoardCtx.strokeRect(0, 0, snakeBoard.width, snakeBoard.height);
};
/////////////////////////////////////////////////
// Main funciton where everyginh will go
const main = function () {
  changing_direction = false;

  if (checkIfGameOver()) return;
  setTimeout(function onTick() {
    clearBoard();
    drawFood();
    drawSnake();
    snakeMovement();
    main();
  }, 100);
  document.addEventListener('keydown', changeDirection);
};
/////////////////////////////////////////////////
// drawing part for each element in array
const drawSnakePart = function (snakePart) {
  snakeBoardCtx.fillStyle = snake_col;
  snakeBoardCtx.strokestyle = snake_border;

  snakeBoardCtx.fillRect(snakePart.x, snakePart.y, 10, 10);
  snakeBoardCtx.strokeRect(snakePart.x, snakePart.y, 10, 10);
  snakeBoardCtx.closePath();
};
/////////////////////////////////////////////////
// Function that loops over snake array and create snake
const drawSnake = function () {
  snake.forEach(drawSnakePart);
};

/////////////////////////////////////////////////
// Game Over

const checkIfGameOver = function () {
  // if snake posotion is at the end
  for (let i = 4; i < snake.length; i++) {
    if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) return true;
  }

  const hitRightWall = snake[0].x + 10 > snakeBoard.width;
  const hitLeftWall = snake[0].x < 0;
  const hitTopWall = snake[0].y < 0;
  const hitBottomWall = snake[0].y > snakeBoard.height - 10;

  return hitLeftWall || hitRightWall || hitTopWall || hitBottomWall;
};

/////////////////////////////////////////////////
// Chaning direction on pressed keys
const changeDirection = function (event) {
  const LeftKey = 37;
  const RightKey = 39;
  const UpKey = 38;
  const DownKey = 40;

  if (changing_direction) return;
  changing_direction = true;

  const keyPressed = event.keyCode;
  const goingUp = dy === -10;
  const goingDown = dy === 10;
  const goingRight = dx === 10;
  const goingLeft = dx === -10;

  if (keyPressed === LeftKey && !goingRight) {
    dx = -10;
    dy = 0;
  }
  if (keyPressed === RightKey && !goingLeft) {
    dx = 10;
    dy = 0;
  }
  if (keyPressed === UpKey && !goingDown) {
    dx = 0;
    dy = -10;
  }
  if (keyPressed === DownKey && !goingUp) {
    dx = 0;
    dy = 10;
  }
};

/////////////////////////////////////////////////
// Moving the snake automatically

const snakeMovement = function () {
  const head = { x: snake[0].x + dx, y: snake[0].y + dy };
  snake.unshift(head);

  const hasEatenFood = snake[0].x === foodX && snake[0].y === foodY;
  if (hasEatenFood) {
    generateFood();
    currentscore++;
    score.innerText = currentscore;
  } else {
    snake.pop();
  }
};

///////////////////////////////////////////////
// Creating food at random places
const randomFood = function (min, max) {
  return Math.round((Math.random() * (max - min) + min) / 10) * 10;
};

const generateFood = function () {
  foodX = randomFood(0, snakeBoard.width - 10);
  foodY = randomFood(0, snakeBoard.height - 10);

  snake.forEach(function hasEatenPart(part) {
    const hasEaten = part.x == foodX && part.y == foodY;
    if (hasEaten) generateFood();
  });
};

const drawFood = function () {
  snakeBoardCtx.fillStyle = snake_col;
  snakeBoardCtx.strokestyle = snake_col;
  snakeBoardCtx.fillRect(foodX, foodY, 10, 10);
  snakeBoardCtx.strokeRect(foodX, foodY, 10, 10);
};

/////////////////////////////////////////////////
// Eating the food and adding to snake array

main();
generateFood();
