const ball = document.getElementById("ball");
const paddle = document.getElementById("paddle");
const gameScore = document.getElementById("score");

let ballX = 200;
let ballY = 0;
let paddleX = 160;
let score = 0;


// Assume paddle width and ball width
const paddleWidth = 80;
const ballWidth = 20;

//Move the paddle
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft" && paddleX > 0) {
    paddleX -= 20;
    //paddleX = paddleX - 20
  } else if (event.key === "ArrowRight" && paddleX < 320) {
    paddleX += 20;
  }
  paddle.style.left = paddleX + "px";
});

//Main Game Loop
function gameLoop() {
  ballY += 5;
  ball.style.left = ballX + "px";
  ball.style.top = ballY + "px";

  //collision detection: if ball touches the paddle
  if (
    ballY + ballWidth >= 480 && // ball bottom reaches paddle top (assuming paddle at y=480)
    ballY + ballWidth <= 500 && // ball not past paddle bottom
    ballX + ballWidth > paddleX && // ball right edge past paddle left
    ballX < paddleX + paddleWidth // ball left edge before paddle right
  ) {
    score++;
    gameScore.textContent = score: ${score};
    resetBall();
  } else if (ballY > 500) {
    alert("Game Over!");
    clearInterval(loop);
  }
}

function resetBall() {
  ballX = Math.floor(Math.random() * (400 - ballWidth));
  ballY = 0;
}

const loop = setInterval(gameLoop, 50);