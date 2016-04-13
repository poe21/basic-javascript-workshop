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

// Write a function that takes a string and returns the last character of a string.
// Test your function on a few inputs, including the empty string.

function lastCharacter(string) {
    return string.substr((string.length-1), (string.length));
}

console.log(lastCharacter("computer"));
console.log(lastCharacter(""));

/* Write a function that takes a string and a number, and returns the character at the position 
represented by the number. The indexing of number should start at 0. 
Test your function on a few inputs, including the empty string.
*/

function specificCharacter(string, position) {
    return string.charAt(position);
}

console.log(specificCharacter("Word", 3));
console.log(specificCharacter("", 3));

// Write a function that takes two numbers and adds them together. Test your function on a few inputs. 
// Write in the comments what happens when you pass something other than a number to your function.

function add(number1, number2) {
    return number1 + number2;
}

console.log(add(21, 37));
console.log(add("Hello","World")); // joins words together
console.log(add(false, "CAT")); // actually joins any value together

// Write a function that takes two numbers and multiplies them together. Test your function on a few inputs. 
// Write in your comments what happens when you pass something other than a number to your function.

function multiply(number1, number2) {
    return number1 * number2;
}

console.log(multiply(21, 37));
console.log(multiply(2, 6));
console.log(multiply("Cats", "are great")); // prints Not a Number