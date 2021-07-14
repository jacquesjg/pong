// Size of the game area (in px)
const GAME_AREA_WIDTH = 700;
const GAME_AREA_HEIGHT = 500;

// Size of the paddles (in px)
const PADDLE_HEIGHT = 100;
const PADDLE_WIDTH = 20;

// Size of the ball (in px)
const BALL_SIZE = 20;

// Get the computer paddle element
const computerPaddle = document.querySelector('.computer-paddle');

// The y-velocity of the computer paddle
let computerPaddleYPosition = 0;
let computerPaddleYVelocity = 1;


// The position and velocity of the computer ball
let ballYPosition = 0;
let ballYVelocity = 1;
let ballXPosition = 0;
let ballXVelocity = 1;


// testing of the rectangle
const gameArea = document.querySelector('.game-area');
gameArea.style.backgroundColor = "white";


// get ball element
const ball = document.querySelector('.ball')

// the y-velocity of the ball

// the x-velocity of the ball




// update ball position
function ballmove() {
    ballYPosition = ballYPosition + ballYVelocity;


    if (ballYPosition < (GAME_AREA_HEIGHT - 20) && ballYPosition > 0) {

        // Apply the y-position 
        ball.style.top = ballYPosition + 'px';
    }
    else { ballYVelocity = ballYVelocity * -1 }

}
// Call the update() function every 35ms
setInterval(ballmove, 35);

// Update the pong world
function update() {

    // Update the computer paddle's position
    computerPaddleYPosition = computerPaddleYPosition + computerPaddleYVelocity;

    // Apply the y-position 
    computerPaddle.style.top = `${computerPaddleYPosition}px`;
}

// Call the update() function every 35ms
setInterval(update, 35);
