const textElement = document.getElementById('changing-text');
const words = ['viajes', 'excursiones', 'turismo'];
let currentWordIndex = 0;
let currentCharacterIndex = 0;
let isDeleting = false;

function typeText() {
  const currentWord = words[currentWordIndex];
  if (!isDeleting) {
    textElement.textContent = currentWord.substring(0, currentCharacterIndex + 1);
    currentCharacterIndex++;
  } else {
    textElement.textContent = currentWord.substring(0, currentCharacterIndex - 1);
    currentCharacterIndex--;
  }

  if (currentCharacterIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(changeWord, 6000);
  } else if (currentCharacterIndex === 0) {
    isDeleting = false;
    currentWordIndex = (currentWordIndex + 1) % words.length;
    setTimeout(typeText, 500);
  } else {
    setTimeout(typeText, 100);
  }
}

function changeWord() {
  typeText();
}

typeText();
