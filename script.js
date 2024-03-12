const wordsBox = document.querySelector('.words');
const randomWords = 'plausible dreamless make thermodynamics raid composure bicycle none run shoal involution storm dolce imaging cutaway member bootleg Nycticorax landmark regulation'.split(' ');

const startGame = () => {
    wordsBox.innerHTML = '';

    for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * randomWords.length);
        const randomWord = randomWords[randomIndex];
        const wordElement = document.createElement('div');
        wordElement.textContent = randomWord;
        wordsBox.appendChild(wordElement);
    }
}

startGame();



