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

// Write a function that takes two numbers and a string. If the string is ‘add’, then return the sum of the numbers. 
// If the string is ‘subtract’, return the difference. If the string is ‘mult’, return the product. 
// If the string is ‘div’, return the ratio. Otherwise return 0.

function operationChoice(number1, number2, string) {
    if (string === "add") {
        return number1 + number2;
    } else if (string === "subtract") {
        return number1 - number2;
    } else if (string === "mult") {
        return number1 * number2;
    } else if (string === "div") {
        return number1 / number2;
    } else {
        return 0;
    }
}

console.log(operationChoice(54, 33, "subtract"));
console.log(operationChoice(54, 33, "add"));
console.log(operationChoice(54, 33, "mult"));
console.log(operationChoice(54, 33, "div"));
console.log(operationChoice(54, 33, "cat"));

// Write a function that takes a string and a number, and returns the string repeated that many number of times. 
// Test your function with various inputs.

function stringRepeat(string, repeatNumber) {
    return string.repeat(repeatNumber);
}

console.log(stringRepeat("Ha", 20));
console.log(stringRepeat("Cats ", 30));
console.log(stringRepeat("Dogs", 0));

// Write a function that takes a string, and returns the reverse of that string. 
// For example, if you pass the function the string “hello”, it should return “olleh”. 
// Test your function on a few inputs, including the empty string.

function reverseString(string) {
    return string.split("").reverse().join("");
}

console.log(reverseString("Potato"));
console.log(reverseString("otirruB"));
console.log(reverseString("")); // returns nothing

// Write a function that takes a number and returns the factorial of a number. The factorial of 5 is 5x4x3x2x1.
// The factorial of 0 is 1. Test your input on a few numbers, including negative numbers.

function factorial(number) {
    for (var i = (number - 1); i > 0; i--) {
        var total = (number *= i);
    }
    return total;
}

console.log(factorial(5));
console.log(factorial(10));
console.log(factorial(-5)); // returns undefined

// Write a function that takes a phrase as a string, and returns the longest word in that phrase. 
// If the phrase contains more than one such word, return the first occurrence. 
// Test your function on a few inputs.

function findLongestWord(phrase) {
    var wordsArray = phrase.split(" ");
    var isLonger = 0;
    var longestWord;
    for (var i = 0; i < wordsArray.length; i++) {
        if (isLonger < wordsArray[i].length) {
            isLonger = wordsArray[i].length;
            longestWord = wordsArray[i];
        } 
    }
    return longestWord;
}

console.log(findLongestWord("This is a phrase tomato potato"));

// Write a function that takes a phrase, and returns the same phrase with every word capitalized. 
// For example, if you pass your function "hello world", it should return "Hello World" 
// and if you pass it "HELLO WORLD" or even "HeLLo WoRLD", it will also return "Hello World". 
// Test your function of a few inputs.

function capitalized(phrase) {
    var wordsArray = phrase.split(" ");
    var capitalizedPhrase = [];
    for (var i = 0; i < wordsArray.length; i++) {
        var capital = wordsArray[i].substr(0, 1).toUpperCase();
        var lowercase = wordsArray[i].substr(1, (wordsArray[i].length - 1)).toLowerCase();
        capitalizedPhrase.push(capital+lowercase);
    }
    return capitalizedPhrase.join(" ");
}

console.log(capitalized("THIS is a tEsT"));
console.log(capitalized("cat"));
console.log(capitalized("HELLO"));

// Write a function that takes an array and returns the largest number of the array. 
// Test your function on a few inputs.

function findLargestNumber(array) {
    var largestNumber = 0;
    for (var i = 0; i < array.length; i++) {
        if (largestNumber < array[i]) {
            largestNumber = array[i];
        }
    }
    return largestNumber;
}

console.log(findLargestNumber([12,21,43]));
console.log(findLargestNumber([547,1033,473]));
console.log(findLargestNumber([-17,56,21]));