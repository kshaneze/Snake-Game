'use strict';
/// Create canvas where i will play the game

/// Create canvas where i will play the game

const board_border = 'rgb(18, 145, 184)';
const board_background = 'black';
const snake_col = 'lightblue';
const snake_border = 'darkblue';

let snake = [
  { x: 200, y: 200 },
  { x: 190, y: 200 },
  { x: 180, y: 200 },
  { x: 170, y: 200 },
  { x: 160, y: 200 },
];

const snakeBoard = document.getElementById('canvas');
const snakeBoardCtx = snakeBoard.getContext('2d');

// creating and clearing the board
const clearBoard = function () {
  snakeBoardCtx.fillStyle = board_background;
  snakeBoardCtx.strokestyle = board_border;
  snakeBoardCtx.fillRect(0, 0, snakeBoard.width, snakeBoard.height);
  snakeBoardCtx.strokeRect(0, 0, snakeBoard.width, snakeBoard.height);
};

// Main funciton where everyginh will go
const main = function () {
  clearBoard();
  drawSnake();
  snakeMovement();
};

// drawing part for each element in array
const drawSnakePart = function (snakePart) {
  snakeBoardCtx.fillStyle = snake_col;
  snakeBoardCtx.strokestyle = snake_border;

  snakeBoardCtx.fillRect(snakePart.x, snakePart.y, 10, 10);
  snakeBoardCtx.strokeRect(snakePart.x, snakePart.y, 10, 10);
};

// Function that loops over snake array and create snake
const drawSnake = function () {
  snake.forEach(drawSnakePart);
};

// Moving the snake automatically

const snakeMovement = function () {};

const updateSnake = function () {
  // requestAnimationFrame(updateSnake);
  // snake.snakeMovement();
};

main();
// class Snake {
//   constructor(posX, posY, radius, speed, snakeArr) {
//     this.posX = posX;
//     this.posY = posY;
//     this.radius = radius;
//     this.snake = snakeArr;
//     this.speed = speed;

//     this.dx = 2 * this.speed;
//     this.dy = 2 * this.speed;
//   }
//   // Create small object (Snake)

//   drawSnake() {
//     ctx.beginPath();
//     ctx.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
//     ctx.fillStyle = 'rgba(250,0,0,0.4)';
//     ctx.fill();
//     ctx.closePath();
//   }

//   creatingRandomFood() {
//     let randomX = Math.random() * canvas.width;
//     let randomY = Math.random() * canvas.height;
//   }

//   snakeMovement() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     this.drawSnake();
//     this.posX += this.dx;

//     if (this.posX + this.radius > canvas.width) {
//       this.dx = -this.dx;
//     }
//     if (this.posX - this.radius < 0) {
//       this.dx = -this.dx;
//     }
//     if (this.posY + this.radius > canvas.height) {
//       this.dy = -this.dy;
//     }
//     if (this.posX - this.radius < 0) {
//       this.dy = -this.dy;
//     }
//   }

//   controlingTheSnake(event) {
//     const LEFT_KEY = 37;
//     const RIGHT_KEY = 39;
//     const UP_KEY = 38;
//     const DOWN_KEY = 40;

//     const keyPressed = event.keyCode;
//     const goingUp = dy === -10;
//     const goingDown = dy === 10;
//     const goingRight = dx === 10;
//     const goingLeft = dx === -10;

//     if (keyPressed === LEFT_KEY && !goingRight) {
//       dx = -10;
//       dy = 0;
//     }

//     if (keyPressed === UP_KEY && !goingDown) {
//       dx = 0;
//       dy = -10;
//     }

//     if (keyPressed === RIGHT_KEY && !goingLeft) {
//       dx = 10;
//       dy = 0;
//     }

//     if (keyPressed === DOWN_KEY && !goingUp) {
//       dx = 0;
//       dy = 10;
//     }
//   }
// }

// const snake = new Snake(400, 300, 10, 1);

// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');

// canvas.width = 800;
// canvas.height = 600;

// let x = 400;
// let y = 300;

// ctx.fillRect(0, 0, canvas.width, canvas.height);
// document.body.appendChild(canvas);

// snake.drawSnake();

// const updateSnake = function () {
//   requestAnimationFrame(updateSnake);
//   snake.snakeMovement();
// };
// updateSnake();

// document.addEventListener('keydown', snake.controlingTheSnake(e));

// Add movement to that object, but only inside this canvas

// Allow object to change directions on pressed keys
