// ########## Creating an array ########## //
// const numbers = [46, 34, 10, 77];
// console.log(numbers[10]);

// ########## Accessing an array ########## //

// const Red = "Red";

// const colors = [Red, "Green", "Blue", "Orange"];
// console.log(colors.at(2));

// console.log(colors.at(-3));

// ########## Modifying an array ########## //

// const colors = ["Red", "Green", "Blue", "Orange"];
// colors[0] = "Yellow";
// console.log(colors);
// colors[2] = "Brown";
// console.log(colors);

// const colors = ["Red", "Green", "Blue", "Orange"];
// const updatedColors = colors.with(1, "Pink");

// console.log(colors);
// console.log(updatedColors);

// const colors = ["Red", "Green", "Blue", "Orange"];

// ########## Properties of an array ########## //

// const colors = ["Red", "Green", "Blue", "Orange", "Yellow"];
// const length = colors.length;
// console.log(length); // 4

// ########## push() ########## //

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// // Let's push a 9 to the end.
// numbers.push(9);

// // Let's push 10 and 11
// numbers.push(10, 11);

// ########## pop() ########## //

// const cities = ["Stockholm", "Göteborg", "Malmö", "Lund"];

// // Remove the last element
// cities.pop();
// console.log(cities);

// ########## unshift() ########## //

// const cities = ["Stockholm", "Göteborg", "Malmö", "Lund"];

// cities.unshift("Linköping");
// console.log(cities);

// ########## shift() ########## //

// const cities = ["Stockholm", "Göteborg", "Malmö", "Lund"];

// cities.shift();
// console.log(cities); //["Göteborg", "Malmö", "Lund"];

// ########## includes() ########## //

// const numbers = [2, 4, 8, 10];

// if (numbers.includes(6)) {
//   console.log("The number 6 exists in the array");
// } else {
//   console.log("There is no number 6 in the array");
// }

// ########## indexOf() ########## //

// const cities = ["Stockholm", "Göteborg", "Malmö", "Lund"];

// const indexOfMalmo = cities.indexOf("Malmö");
// console.log(cities);
// console.log(indexOfMalmo);

// ########## join() ########## //

// const cities = ["Stockholm", "Göteborg", "Malmö", "Lund"];
// const citiesAsString = cities.join();
// console.log(citiesAsString);

// ########## splice() ########## //

// remove Denmark
// const countries = ["Sweden", "Denmark", "Finland", "Norway", "Iceland"];
// countries.splice(1, 1);
// console.log(countries); // ["Sweden", "Finland", "Norway", "Iceland"];

// remove Denmark and Finland

// countries.splice(1, 2);
// console.log(countries); // ["Sweden", "Norway", "Iceland"];

// replace Norway with Germany

// const countries = ["Sweden", "Denmark", "Finland", "Norway", "Iceland"];
// countries.splice(3, 1, "Germany");
// console.log(countries); // ["Sweden", "Denmark", "Finland", "Germany", "Iceland"];

// ########## while loop ########## //

// let count = 0;

// while (count < 100) {
//   count++;
//   // count = count + 1; // This is equal to above
//   console.log(count);
// }

// console.log(`The count is now ${count} after the loop canceled.`);

// with break
// let count = 120;

// while (count < 100) {
//   count++;
//   // count = count + 1; // This is equal to above
//   console.log(count);

//   if (count == 47) {
//     console.log("The count is now 47 and that's enough!");
//     break;
//   }
// }

// console.log(`The count is now ${count} after the loop canceled.`);

// ########## do-while loop ########## //

let count = 0;

do {
  count++;
  console.log(count);
} while (count === 0);