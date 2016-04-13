// Write a function that takes a string and returns the first character of the string. 
// Test your function on a few inputs, including the empty string.

function firstCharacter(string) {
    return string[0];
}

console.log(firstCharacter("Cat"));
console.log(firstCharacter(""));

// Alernative function to get a first character as requested by Codrin

function firstCharacterAlternate(str) {
    return str.substr(0,1);
}

console.log(firstCharacterAlternate("Annie"));