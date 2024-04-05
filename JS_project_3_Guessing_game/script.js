// Initial variables
let totalAttempt = 5;
let attempt = 0;
let totalWin = 0;
let totalLost = 0;

// Seleting elements from html
const cardBody = document.querySelector('.card-body');
const form = cardBody.querySelector('form');
const guessingNumber = form.querySelector('#guessingNumber');
const checkButton = form.querySelector('#check');
const resultText = cardBody.querySelector('#resultText');
const remainingAttempt = cardBody.querySelector('#remainingAttempt');


form.addEventListener('submit', (event) => {
    event.preventDefault();
    checkResult(guessingNumber.value);
});

// Functions
const checkResult = (guessingNumber) => {
    const randomNumber = getRandomNumber(5);
    if(guessingNumber == randomNumber){
        resultText.innerHTML = `You have WON !`
    }
    else{
        resultText.innerHTML = `You have lost. Random number was : ${randomNumber}`;
    }
}

const getRandomNumber = (limit) => {
    return Math.floor(Math.random() * limit)+1;
}
