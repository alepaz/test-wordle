/*
    function to retrieve a word to play wordle
    params: no the number of the word to retrieve
    return: the word to play
*/
export function getWord() {
  const words = ["apple", "grape", "peach", "berry", "melon", "lemon"];
  return words[Math.floor(Math.random() * words.length)];
}

//function to display each word with a different color background
export function getWordColors(word, wordToPlay) {
  //toLowerCase the word to play
  wordToPlay = wordToPlay.toLowerCase();
  //toLowerCase the word tried
  word = word.toLowerCase();
  // We will need to check each letter of the word
  const wordToPlayArray = wordToPlay.split("");
  // We will need to check if the letter is in the word
  const wordTriedArray = word.split("");
  const colors = [];
  for (let i = 0; i < wordToPlayArray.length; i++) {
    if (wordTriedArray[i] === wordToPlayArray[i]) {
      colors.push("green");
    } else if (wordToPlayArray.includes(wordTriedArray[i])) {
      colors.push("yellow");
    } else {
      colors.push("gray");
    }
  }

  return colors;
}
