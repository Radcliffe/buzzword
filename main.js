const letterCells = document.querySelectorAll('.letter');
const shuffleButton = document.getElementById('shuffle');
const deleteButton = document.getElementById('delete');
const enterButton = document.getElementById('enter');
const currentGuessDisplay = document.getElementById('current-guess');
const gameDiv = document.getElementById('game');
const hive = document.getElementById('hive');
let gameOver = false;

shuffleButton.addEventListener('click', shuffleLetters);

let wordIndex = Math.floor(new Date().getTime() / 86400000) % wordList.length;
let {word, letters, length} = wordList[wordIndex];
let currentGuess = '';
letters = letters.split('');
shuffleLetters();

function shuffle(a) {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function setLetters (letters) {
    letterCells.forEach((cell, index) => {
        cell.textContent = letters[index] || '';
    });
}

function shuffleLetters() {
    shuffle(letters);
    setLetters(letters);
}

gameDiv.addEventListener('click', function(event) {
    if (!gameOver && currentGuess.length < 16 && event.target.classList.contains('letter')) {
        currentGuessDisplay.classList.remove('incorrect');
        currentGuess += event.target.textContent;
        currentGuessDisplay.textContent = currentGuess;
    }
});

deleteButton.addEventListener('click', function() {
    if (gameOver || currentGuess === '') {
        return;
    }
    currentGuess = currentGuess.slice(0, -1);
    currentGuessDisplay.textContent = currentGuess;
}
);

enterButton.addEventListener('click', function() {
    if (gameOver || currentGuess === '') {
        return;
    }
    if (currentGuess === word) {
        currentGuessDisplay.classList.add('correct');
        hive.classList.remove('active');
        gameOver = true;
    } else {
        currentGuessDisplay.classList.add('incorrect');
        currentGuess = '';
    }
}
);
