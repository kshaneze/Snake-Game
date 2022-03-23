'use strict';
/// Create canvas where i will play the game
class Snake {
  constructor(posX, posY, radius, speed, snake) {
    this.posX = posX;
    this.posY = posY;
    this.radius = radius;
    this.snake = snake;
    this.speed = speed;

    this.dx = 2 * this.speed;
    this.dy = 2 * this.speed;
  }
  // Create small object (Snake)

  drawSnake() {
    ctx.beginPath();
    ctx.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'rgba(250,0,0,0.4)';
    ctx.fill();
    ctx.closePath();
  }

  creatingRandomFood() {
    let randomX = Math.random() * canvas.width;
    let randomY = Math.random() * canvas.height;
  }

  snakeMovement() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.drawSnake();
    this.posX += this.dx;

    if (this.posX + this.radius > canvas.width) {
      this.dx = -this.dx;
    }
    if (this.posX - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.posY + this.radius > canvas.height) {
      this.dy = -this.dy;
    }
    if (this.posX - this.radius < 0) {
      this.dy = -this.dy;
    }
  }

  controlingTheSnake() {}
}

const snake = new Snake(400, 300, 10, 1);

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 600;

let x = 400;
let y = 300;

ctx.fillRect(0, 0, canvas.width, canvas.height);
document.body.appendChild(canvas);

snake.drawSnake();

const updateSnake = function () {
  requestAnimationFrame(updateSnake);
  snake.snakeMovement();
};

updateSnake();
// Add movement to that object, but only inside this canvas

// Allow object to change directions on pressed keys

//
