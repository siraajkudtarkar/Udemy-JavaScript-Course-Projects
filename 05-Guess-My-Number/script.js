'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

let displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener
    ('click', function () {
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess, typeof guess);

        // When guess is empty or invalid
        if (!guess) {
            // document.querySelector('.message').textContent = '⛔️ No Number!';
            displayMessage('⛔️ No Number!');
            // When guess is right
        } else if (guess === secretNumber) {
            // document.querySelector('.message').textContent = '🎉 Correct Number!';
            displayMessage('🎉 Correct Number!');

            document.querySelector('.number').textContent = secretNumber;

            document.querySelector('body').style.backgroundColor = '#60b347';

            document.querySelector('.number').style.width = '30rem';
            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }
            // When guess is wrong
        } else if (guess != secretNumber) {
            if (score > 1) {
                document.querySelector('.message').textContent = guess > secretNumber ? displayMessage('📈 Too High!') : displayMessage('📉 Too Low!');
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.score').textContent = 0;
                // document.querySelector('.message').textContent = '💥 You Lost!';
                displayMessage('💥 You Lost!');
            }
            //     // When guess is too high
            // } else if (guess > secretNumber) {
            //     if (score > 1) {
            //         document.querySelector('.message').textContent = '📈 Too High!';
            //         score--;
            //         document.querySelector('.score').textContent = score;
            //     } else {
            //         document.querySelector('.score').textContent = 0;
            //         document.querySelector('.message').textContent = '💥 You Lost!';
            //     }
            //     // When guess is too low
            // } else if (guess < secretNumber) {
            //     if (score > 1) {
            //         document.querySelector('.message').textContent = '📉 Too Low!';
            //         score--;
            //         document.querySelector('.score').textContent = score;
            //     } else {
            //         document.querySelector('.score').textContent = 0;
            //         document.querySelector('.message').textContent = '💥 You Lost!';
            //     }
        }
    });

document.querySelector('.again').addEventListener
    ('click', function () {
        score = 20;
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        document.querySelector('.message').textContent = 'Start guessing...';
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
    })