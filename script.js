/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = "🎉Correct Number!"
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 12;
document.querySelector('.score').textContent = 21;
document.querySelector('.guess').value = 22;
console.log(document.querySelector('.guess').value); */

let chances = 4;
let score = Number(document.querySelector('.score').textContent);
let highScore = 0;
let secretNum = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // When there is no input
  if (!guess) {
    lowHigh(score, '⛔ No Number!!!');
  } else if (chances > 0 || score > 1) {
    // When player wins the game
    if (guess === secretNum) {
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
      lowHigh(score, '🎉Correct Number!');
      document.querySelector('.number').textContent = secretNum;
      document.body.style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
    } else if (guess !== secretNum) {
      // When guess is wrong
      score--;
      guess > secretNum
        ? lowHigh(score, '📈 Too High!')
        : lowHigh(score, '📈 Too Low!');
    }
    chances--;
  } else if (chances <= 0 || score <= 0) {
    // When player lost the game
    document.querySelector('.number').textContent = secretNum;
    lowHigh(0, '👎 You Lost 😥');
  }
});

// Reset the game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNum = Math.trunc(Math.random() * 20) + 1;
  lowHigh(score, 'Start Guessing...');
  document.querySelector('.guess').value = '';
  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});

// high and low message;
function lowHigh(score, message) {
  document.querySelector('.message').textContent = message;
  document.querySelector('.score').textContent = score;
}
