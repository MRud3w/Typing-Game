const wordsBox = document.querySelector('.words');
const gameArea = document.querySelector('.game');
const randomWords = 'plausible dreamless make thermodynamics raid composure bicycle none run shoal involution storm dolce imaging cutaway member bootleg Nycticorax landmark regulation'.split(' ');
const wordsCount = randomWords.length;

const createRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * randomWords.length);
    return randomWords[randomIndex];
}

const addClass = (el, val) => {
    el.className += ' ' + val;
}

const removeClass = (el, val) => {
    el.className = el.className.replace(val,'')
}

const formatWord = (word) => {
    let formattedWord = '';
    for (let i = 0; i < word.length; i++) {
        formattedWord += `<span class="letter">${word[i]}</span>`;
    }
    return `<div class="word">${formattedWord}</div>`;
}

const startGame = () => {
    wordsBox.innerHTML = '';
    for (let i = 0; i < 100; i++) {
        wordsBox.innerHTML += formatWord(createRandomWord());
    }
    addClass(document.querySelector('.word'), 'current');
    addClass(document.querySelector('.letter'), 'current');
}

gameArea.addEventListener('keydown', (e) => {
    const key = e.key;
    const currentLetter = document.querySelector('.letter.current');
    const currentWord = document.querySelector('.word.current');
    const expected = currentLetter.innerHTML;
    const isLetter = key.length === 1 && key !== ' ';
    const isSpace = key === ' ';

    if (isLetter) {
        if (currentLetter) {
            addClass(currentLetter, key === expected ? 'correct' : 'incorrect');
            removeClass(currentLetter, 'current');
            addClass(currentLetter.nextSibling, 'current');
        }
    }

    if (isSpace) {
        if (expected !== ' ') {
            const lettersToInvalidate = [...currentWord.querySelectorAll('.letter:not(.correct)')];
            lettersToInvalidate.forEach(letter => {
                addClass(letter, 'incorrect');
            });
        }
        removeClass(currentWord, 'current');
        addClass(currentWord.nextSibling, 'current');
        if (currentLetter) {
            removeClass(currentLetter, 'current');
        }
        addClass(currentWord.nextSibling.firstChild, 'current');
    }
});


startGame();



