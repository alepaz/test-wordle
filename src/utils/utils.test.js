import { getWord, getWordColors } from "./utils";

//Create a test to check if the word is in the list of words

test("getWord", () => {
  const words = ["apple", "grape", "peach", "berry", "melon", "lemon"];
  const word = getWord();
  expect(words).toContain(word);
});

//The word doesn't exist in the list of words
test("get wrong word", () => {
  const word = getWord();
  expect(word).not.toEqual("banana");
});

//Test to verify if the array of colors are correct
test("getWordColors", () => {
  const wordToPlay = "apple";
  const wordTried = "grape";
  const colors = getWordColors(wordTried, wordToPlay);
  expect(colors).toEqual(["gray", "gray", "yellow", "yellow", "green"]);
});

// Test to verify if the word is correct without case sensitivity
test("getWordColors case insensitive", () => {
  const wordToPlay = "apple";
  const wordTried = "APPLE";
  const colors = getWordColors(wordTried, wordToPlay);
  expect(colors).toEqual(["green", "green", "green", "green", "green"]);
});

