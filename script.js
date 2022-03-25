'use strict';
/// Create canvas where i will play the game

/// Create canvas where i will play the game

const board_border = 'rgb(18, 145, 184)';
const board_background = 'black';
const snake_col = 'lightblue';
const snake_border = 'darkblue';

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

const snakeBoard = document.getElementById('canvas');
const snakeBoardCtx = snakeBoard.getContext('2d');
snakeBoard.width = 800;
snakeBoard.height = 600;

// creating and clearing the board
const clearBoard = function () {
  snakeBoardCtx.fillStyle = board_background;
  snakeBoardCtx.strokestyle = board_border;
  snakeBoardCtx.fillRect(0, 0, snakeBoard.width, snakeBoard.height);
  snakeBoardCtx.strokeRect(0, 0, snakeBoard.width, snakeBoard.height);
};

// Main funciton where everyginh will go
const main = function () {
  changing_direction = false;
  checkIfGameOver();
  setTimeout(function onTick() {
    clearBoard();
    drawSnake();
    snakeMovement();
    main();
  }, 100);

  document.addEventListener('keydown', changeDirection);
};

// drawing part for each element in array
const drawSnakePart = function (snakePart) {
  snakeBoardCtx.fillStyle = snake_col;
  snakeBoardCtx.strokestyle = snake_border;

  snakeBoardCtx.fillRect(snakePart.x, snakePart.y, 10, 10);
  snakeBoardCtx.strokeRect(snakePart.x, snakePart.y, 10, 10);
  snakeBoardCtx.closePath();
};

// Function that loops over snake array and create snake
const drawSnake = function () {
  snake.forEach(drawSnakePart);
};

const checkIfGameOver = function () {
  if (snake[0].x + 20 > snakeBoard.width) {
    dx = -dx;
  }
  if (snake[0].x + -10 < 0) {
    dx = -dx;
  }
  if (snake[0].y > snakeBoard.height) {
    dy = -dy;
  }
  if (snake[0].y < 0) {
    dy = -dy;
  }
};

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

// Moving the snake automatically

const snakeMovement = function () {
  const head = { x: snake[0].x + dx, y: snake[0].y + dy };
  snake.unshift(head);
  snake.pop();
};

main();
