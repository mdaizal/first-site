var randomNumber = Math.floor(Math.random() * 100) + 1;

var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');

var guessCount = 1;
var resetButton;

checkGuess = () => {
    var userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = 'Previous guesses';
    }
    guesses.textContent+= 'userGuess' + ' ';

    if (guessCount === randomNumber) {
        lastResult.textContent = 'Congratulations. You got it right!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
    }
}