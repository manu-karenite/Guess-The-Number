'use strict';

//generating a random number
function myPlay() {
  let audio = new Audio('wrongAnswer1.mp3');
  audio.play();

  // audio.play();
}
let win = new Audio('winningSound.mp3');

let rand = Number(Math.trunc(Math.random() * 20 + 1)); // [1,20]
console.log(rand);
let highScore = Number(0);

let score = Number(10);

let retrive = function () {
  let guess = Number(document.querySelector('.guess').value);
  //store input data in guess variable

  if (!guess) {
    //falsy values
    document.querySelector('.message').textContent =
      'No Value Fetched! Try Again!';
  } //meaning that some value is present
  else {
    if (score > Number(1)) {
      //when matched
      if (guess === rand) {
        document.querySelector('.message').textContent = 'You Won the game!';
        score--;
        document.querySelector('.score').textContent = score;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.backgroundColor = '#eee';
        document.querySelector('.number').style.color = '#222';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = rand;

        win.play();
        if (score > highScore) {
          highScore = score;
          document.querySelector('.highscore').textContent = highScore;
        }

        //manipulating CSS
      } else if (guess < rand) {
        document.querySelector('.message').textContent =
          'Too Low for the Game!!';
        score--;
        document.querySelector('.score').textContent = score;
        myPlay();
      } else {
        document.querySelector('.message').textContent =
          'Too High for the Game!!';
        score--;
        document.querySelector('.score').textContent = score;
        myPlay();
      }

      //
    } else {
      document.querySelector('body').style.backgroundColor = '#ff1a1a';
      document.querySelector('.score').textContent = 0;
      let lose = new Audio('lose.mp3');
      lose.play();
      document.querySelector('.message').textContent = 'You lost the game!';
    }
  }
};
document.querySelector('.check').addEventListener('click', retrive); //retrive is a function ecpression here

//for AGAIN button
let setupBack = function () {
  //document.querySelector('.highScore').textContent = highScore;
  score = 10;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = '0';

  rand = Number(Math.trunc(Math.random() * 20 + 1)); // [1,20]
  console.log(rand);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
};

document.querySelector('.again').addEventListener('click', setupBack);
