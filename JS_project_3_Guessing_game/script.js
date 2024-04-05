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
const lostWinMessage = document.createElement('p'); // Create HTML Tag from JS


form.addEventListener('submit', (event) => {
    event.preventDefault();
    attempt++;
    if(attempt === 5){
        guessingNumber.disabled = true;
        checkButton.disabled = true;
    }
    if(attempt < 6){  
        let checkNumber = Number(guessingNumber.value);
        checkResult(checkNumber);
        remainingAttempt.innerHTML = `Remaining attempts : ${totalAttempt - attempt}`;
    }
    
    guessingNumber.value = '';
});

// Functions
const checkResult = (guessingNumber) => {
    const randomNumber = getRandomNumber(5);
    if(guessingNumber == randomNumber){
        resultText.innerHTML = `You have WON !`
        totalWin++;
    }
    else{
        resultText.innerHTML = `You have lost. Random number was : ${randomNumber}`;
        totalLost++;
    }
    lostWinMessage.innerHTML = `Won : ${totalWin}, Lost : ${totalLost}`;
    lostWinMessage.classList.add('large-text');
    cardBody.appendChild(lostWinMessage);
}

const getRandomNumber = (limit) => {
    return Math.floor(Math.random() * limit)+1;
}
