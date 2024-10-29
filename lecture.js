/* const numbers = [46, 34, 10, 77];
console.log(numbers[0]); // returns 46

const Red = "Red";

const colors = [Red, "Green", "Blue", "Orange"];
console.log(colors.at(2)); // returns blue

console.log(colors.at(-3)); // returns orange */

/* const colors = ["Red", "Blue", "Green", "Yellow"];

const updatedColors = colors.with(1, "Pink");

console.log(colors); // red, blue, green, yellow
console.log(updatedColors); // red, pink, green, yellow */

/* const colors = ["Red", "Blue", "Green", "Yellow"];

let length = colors.length;
console.log(length); // returns 4 */

/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

numbers.push(9); // adds 9 to the end of the array "numbers"

console.log(numbers);

let length = numbers.push(20);

console.log(length); // returns 10 since numbers.push returns the new length of array */

const cities = ["Stockholm", "Malmö", "Höör", "Göteborg", "Lund"];

// remove the last element
cities.unshift("Linköping");
console.log(cities); // Linköping is now added to the start of cities
