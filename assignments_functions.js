// 1. Basic Greeting
// Create a function called greet that logs the string
// "Hello, World!" to the console.

function helloWorld() {
  console.log("Hello, world!");
}
//helloWorld();

// 2. Favorite Number
// Write a function named favoriteNumber that logs your
// favorite number (e.g., 42) to the console.

function favoriteNumber() {
  console.log(42);
}
//favoriteNumber();

// 3. Magic Eight Ball
//Create a function called magicEightBall that logs
// a random response from the following list: "Yes", "No",
// "Maybe", or "Ask again later".
function magicEightBall() {
  const listOfAnswers = ["Yes", "No", "Maybe", "Ask again later"];
  const randomAnswer =
    listOfAnswers[Math.floor(Math.random() * listOfAnswers.length)];
  console.log(randomAnswer);
}
//magicEightBall();

// 4. Current Year
// Write a function called getCurrentYear that logs the
// current year to the console using the Date object.
function getCurrentYear() {
  const currentYear = new Date().getFullYear();
  console.log(currentYear);
}
//getCurrentYear();

// 5. Random Joke
//Create a function called tellJoke that logs a random
// joke from a predefined list of jokes to the console.
function tellJoke() {
  const listOfJokes = [
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "What do you call fake spaghetti? An impasta!",
    "Why don’t skeletons fight each other? They don’t have the guts!",
    "How do you organize a space party? You planet!",
    "Why was the math book sad? Because it had too many problems!",
  ];
  const randomJoke =
    listOfJokes[Math.floor(Math.random() * listOfJokes.length)];
  console.log(randomJoke);
}
//tellJoke();

// 6. Write a function named personalGreeting that takes a
// name as a parameter and logs a greeting string (e.g.,
//"Hello, [name]!") to the console.
function personalGreeting(name) {
  console.log("Hello, " + name + "!");
}
//personalGreeting("Jerry");

// 7. Sum of Two Numbers
// Create a function called add that takes two numbers as
// parameters and logs their sum to the console.
function addition(num1, num2) {
  const sum = num1 + num2;
  console.log(sum);
}
//addition(3, 5);

// 8. Age in Months
//Write a function named ageInMonths that takes a person's
//age in years as a parameter and logs their age in months
//(e.g., age * 12).
function ageInMonths(age) {
  const ageInMonths = age * 12;
  console.log("Your age in months is: " + ageInMonths + ".");
}
//ageInMonths(27);

// 9. Temperature Converter
// Create a function called celsiusToFahrenheit that takes
// a temperature in Celsius as a parameter and logs the
// equivalent temperature in Fahrenheit to the console.
function celsiusToFahrenheit(tempInCelcius) {
  const farenheit = 32 + tempInCelcius * 1.8;
  console.log(farenheit);
}
//celsiusToFahrenheit(30); // Returns 86

// 10. Full Name
// Write a function named getFullName that takes two
// parameters, firstName and lastName, and logs the full
// name as a single string (e.g., "John Doe") to the console.
function getFullName(firstName, lastName) {
  console.log(firstName, lastName);
}
//getFullName("Johan", "Rehn");

// 11. Area of a Rectangle
// Create a function called calculateArea that takes the
// length and width of a rectangle as parameters and logs
// the area to the console.
function calculateArea(lengthOfRectange, widthOfRectangle) {
  const area = lengthOfRectange * widthOfRectangle;
  return area;
}
//console.log(calculateArea(2, 2)); // returns 4

// 12. Find Maximum
// Write a function named findMax that takes two numbers
// as parameters and logs the larger of the two.
function findMax(num1, num2) {
  let largerNr = 0;
  if (num1 > num2) {
    largerNr = num1;
  } else {
    largerNr = num2;
  }
  return largerNr;
}
//console.log(findMax(5, 3)); // returns 5

// 13. Count Vowels
// Create a function called countVowels that takes a
// string as a parameter and logs the number of vowels
// (a, e, i, o, u) in that string.
function countVowels(exampleString) {
  const nrOfVowels = exampleString.length;
  return nrOfVowels;
}
//console.log(countVowels("Hello")); // returns 5

// 14. Discount Price
// Write a function named calculateDiscount that takes the
// original price and the discount percentage as parameters
// and logs the price after discount to the console.
function calculateDiscount(ogPrice, discountAsPercentage) {
  const priceAfterDisc = ogPrice * (1 - discountAsPercentage / 100);
  return priceAfterDisc;
}
//console.log(calculateDiscount(100, 20)); // returns 80, after 20% discount

// 15. Reverse String
// Create a function called reverseString that takes a string
// as a parameter and logs the string reversed to the console.
function reverseString(exampleString) {
  let stringAfterReversal = "";
  for (let index = exampleString.length - 1; index >= 0; index--) {
    stringAfterReversal += exampleString.charAt(index);
  }
  return stringAfterReversal;
}
//console.log(reverseString("Hello")); // Returns olleH

// 16. Palindrome Checker
// Write a function called isPalindrome that takes a string
// as a parameter and returns true if the string is a
// palindrome (reads the same forwards and backwards) and
// false otherwise.
function isPalindrome(exampleString) {
  let palindrome = true;
  if (reverseString(exampleString) != exampleString) {
    palindrome = false;
  }
  return palindrome;
}
//console.log(isPalindrome("civic")); // returns true

// 17. FizzBuzz
// Create a function named fizzBuzz that takes a number as a
// parameter and returns:
/*  "Fizz" if the number is divisible by 3,
    "Buzz" if it is divisible by 5,
    "FizzBuzz" if it is divisible by both, and
    the number itself if none of these conditions are met. */
function fizzBuzz(exampleNumber) {
  let outputString = "";
  if (exampleNumber % 3 == 0) {
    outputString += "Fizz";
  }
  if (exampleNumber % 5 == 0) {
    outputString += "Buzz";
  }
  return outputString;
}
//console.log(fizzBuzz(15)); // returns FizzBuzz

// 18. Factorial Calculator
// Write a function called factorial that takes a positive
// integer as a parameter and returns the factorial of that
// number (e.g., 5! = 5 × 4 × 3 × 2 × 1).
function factorial(posNumber) {
  let factorialOfNum = posNumber;
  for (let index = posNumber - 1; index > 0; index--) {
    factorialOfNum *= index;
  }
  return factorialOfNum;
}
//console.log(factorial(5)); // returns 120

// 19. Longest Word
// Create a function named findLongestWord that takes a string
// (a sentence) as a parameter and returns the longest word
// in that sentence.
function findLongestWord(sentence) {
  let longestWord = "";
  let currentWordInSentence = "";

  for (let index = 0; index < sentence.length; index++) {
    if (sentence.charAt(index) !== " ") {
      currentWordInSentence += sentence.charAt(index);
    } else {
      if (currentWordInSentence.length > longestWord.length) {
        longestWord = currentWordInSentence;
      }
      currentWordInSentence = "";
    }
  }

  if (currentWordInSentence.length > longestWord.length) {
    longestWord = currentWordInSentence;
  }

  return longestWord;
}
//console.log(findLongestWord("Hej Nicklas om du läser detta!")); // returns Nicklas since it has 7 chars

// 20. Array Average
// Write a function called calculateAverage that takes an array of numbers as
// a parameter and returns the average of those numbers.
function calculateAverage(listOfNumbers) {
  let averageNum = 0;

  for (const number of listOfNumbers) {
    averageNum += number;
  }
  averageNum /= listOfNumbers.length;

  return averageNum;
}
//console.log(calculateAverage([3, 3, 3])); // returns 3

// 21. Remove Duplicates
// Create a function named removeDuplicates that takes an array as a parameter
// and returns a new array with duplicate values removed.
function removeDuplicates(exampleArray) {
  const uniqueArray = exampleArray.filter(
    (value, index) => exampleArray.indexOf(value) === index
  );

  return uniqueArray;
}
//console.log(removeDuplicates([3, 3, 3, 5, 5, 6])); // Returns 3, 5 and 6

// 22. Capitalize First Letter
// Write a function called capitalizeFirstLetter that takes a string as a
// parameter and returns the string with the first letter capitalized.
function capitalizeFirstLetter(exampleString) {
  const firstLetter = exampleString.charAt(0).toUpperCase();
  const restOfString = exampleString.slice(1);
  return firstLetter + restOfString;
}
//console.log(capitalizeFirstLetter("hello")); // returns Hello

// 23. Count Occurrences
// Create a function named countOccurrences that takes a string and a character
// as parameters and returns the number of times the character appears in the
// string.
function countOccurrences(exampleString, exampleChar) {
  return exampleString.split(exampleChar).length - 1;
}
//console.log(countOccurrences("hello", "l")); // returns 2

// 24. Merge Arrays
// Write a function called mergeArrays that takes two arrays as parameters and
// returns a new array that contains all the elements from both arrays, ensuring
// no duplicates.
function mergeArrays(exampleArray1, exampleArray2) {
  const newArray = exampleArray1.concat(exampleArray2);
  return removeDuplicates(newArray);
}
//console.log(mergeArrays([1, 2, 3], [2, 3, 4])); // Returns 1, 2, 3, 4

// 25. Random Password Generator
// Write a function called generatePassword that takes a length as a parameter
// and returns a randomly generated password of that length, using uppercase
// letters, lowercase letters, and numbers.
function generatePassword(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖabcdefghijklmnopqrstuvwxyzåäö0123456789";
  const result = [];

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result.push(characters.charAt(randomIndex));
  }

  return result.join("");
}
//console.log(generatePassword(10));

// 26. Character Frequency
// Create a function named charFrequency that takes a string as a parameter and
// returns an object with each character as a key and the number of times it
// appears in the string as the value.
function charFrequency(exampleString) {
  const resultArray = [];

  for (let char of exampleString) {
    const occurrences = countOccurrences(exampleString, char);

    // Only add to result if it's not already added
    if (!resultArray.includes(`${char}: ${occurrences}`)) {
      resultArray.push(`${char}: ${occurrences}`);
    }
  }

  return resultArray;
}
//console.log(charFrequency("Hello"));

// 27. Intersection of Arrays
// Write a function called arrayIntersection that takes two arrays as parameters
// and returns a new array containing only the elements that are present in both arrays.
function arrayIntersection(exampleArray1, exampleArray2) {
  const newArray = exampleArray1.concat(exampleArray2);

  return newArray.filter(
    (item, index) =>
      newArray.indexOf(item) !== index && newArray.lastIndexOf(item) === index
  );
}
//console.log(arrayIntersection([1, 2, 3], [2, 3, 4])); // returns only 2 and 3

// 28. String Reversal
// Create a function named reverseWords that takes a string as a parameter
// and returns the string with the order of the words reversed
//(e.g., "Hello World" becomes "World Hello").
function reverseWords(sentence) {
  let reversedSentence = [];
  let currentWordInSentence = "";

  for (let index = 0; index < sentence.length; index++) {
    if (sentence.charAt(index) !== " ") {
      currentWordInSentence += sentence.charAt(index);
    } else {
      reversedSentence.unshift(currentWordInSentence);
      currentWordInSentence = "";
    }

    if (index == sentence.length - 1) {
      reversedSentence.unshift(currentWordInSentence);
    }
  }

  return reversedSentence.join(" ");
}
//console.log(reverseWords("Hello World")); // returns World Hello

// 29. Find Minimum
// Write a function called findMin that takes an array of numbers as
// a parameter and returns the smallest number in the array.
function findMin(arrayOfNumbers) {
  if (!Array.isArray(arrayOfNumbers)) {
    return "Invalid input";
  }
  for (const item of arrayOfNumbers) {
    if (typeof item !== "number" || isNaN(item)) {
      return "Invalid input";
    }
  }
  if (arrayOfNumbers.length === 0) {
    return "Array is empty";
  }

  let lowestValue = arrayOfNumbers[0];
  for (let index = 1; index < arrayOfNumbers.length; index++) {
    if (arrayOfNumbers[index] < lowestValue) {
      lowestValue = arrayOfNumbers[index];
    }
  }

  return lowestValue;
}
console.log(findMin([2, 1, 3, -3, 5])); // returns -3