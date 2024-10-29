# Lecture_Arrays_Loops_Functions

2024 10 29 JavaScript - Arrays, Loops and Functions

<details open>
 <summary>Table of content</summary>

- [Arrays](#arrays)
  - [Creating Arrays](#creating-arrays)
  - [Accessing elements in Arrays](#accessing-elements-in-arrays)
  - [Modifying elements in Arrays](#modifying-elements-in-arrays)
  - [Properties of Arrays](#properties-of-arrays)
  - [Static Methods](#static-methods)
  - [Array Methods](#array-methods)
- [Loops](#loops)
  - [While](#while-loop)
  - [Do-while](#do-while-loop)
  - [For-loop](#for-loop-with-index)
  - [For..of](#forof-loop)
  - [For..in](#forin-loop)
- [Functions](#functions)
  - [Create Functions](#create-functions)
  - [Parameters](#functions-with-parameters)
  - [Return Value](#functions-with-return-value)
  - [Parameters and return value](#functions-with-return-value)
  </details>

[Back to top](#Lecture_Arrays_Loops_Functions)

## Arrays

An array is just a collection of data. And we can see it as a list of one or more items. The proper terms are an array of different amount of elements. <br>
In order to have an array you need square brackets`[]`, and inside those we have items, or elements that are separated with a comma. It can look like this:

```js
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
```

The above is an array of numbers. We can also have an array of strings.

```js
["Måns", "Johan", "Sebbe", "Ruben"];
```

Since we are using JS, we can mix the types inside an array. This would be prohibited in other languages like Java or C#.

```js
["Måns", 23, "Sebbe", 10];
```

Even if this is alright, mixing data types inside the array, you really shouldn´t do because it´s bad practise. Keep the array clean, only one data type per array. The array itself can have multiple elements, but they should all be of the same type.

The purpose of an array is to collect larger amounts of data and handle it as one entity. Take the name arrays for instance, instead of creating four variables that must be handled one by one, we can have just one array instead that we handle. Makes it easier and lets us handle bigger amount of data in an easy way.

Down below is a very good link to some documentations on arrays:

[Array docs on mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

[Back to top](#Lecture_Arrays_Loops_Functions)

### Creating Arrays

To create an array, just create a variable and assign it to an array.

```js
const numbers = [10, 23, 27, 12];
```

When we create an array like this, the adress, (referense), is saved to the variable. And by adress I mean the adress to the place on the hard drive with the content of the array is saved. This reference is a so-called pointer. 

Passed-by-reference is something that relates to this. 

### Accessing elements in Arrays

There are 2 ways to access elements in an array. The first, and most common one is to access it by index. Each element in an array is given an index position and this position count always start from 0. 

An array is zero-index-based. In order to access the first element in the array, we access the element on index position 0, the second on index position 1 and so on.

So to access an element, we just reference the variable that points to the array, and access it with an index with the help of square brackes `[]`.

Acessing first element of array:

```js
const numbers = [10, 23, 27, 12];
console.log(numbers[0]); // Returns 10
```

The third element: 

```js
const numbers = [10, 23, 27, 12];
console.log(numbers[2]); // Returns 27
```

The second way of accessing an element in an array is to use an array method called `at()`. 

Same example, access the first element:

```js
const colors = ["Red", "Blue", "Green", "Yellow"];
console.log(colors.at(0)); // Returns red
```

The nice thing about the `at()` method is that is accepts negative navlues, and if you give it a negative value, it starts "counting" from the end of the array, so -1 would be the last element in the array. This is similar to the way python works. 

```js
const colors = ["Red", "Blue", "Green", "Yellow"];
console.log(colors.at(-1)); // Returns yellow
```

[Back to top](#Lecture_Arrays_Loops_Functions)

### Modifying elements in Arrays

In order to edit an element we need to know it´s index position and then we can just use the square brackets. In order to access it and modify it, we modify it by assigning a new value to it.

```js
const colors = ["Red", "Blue", "Green", "Yellow"];
colors[0] = "Orange";
console.log(colors); // orange, blue, green, yellow

colors[2] = "Brown";
console.log(colors); // orange, blue, brown, yellow
```

We can also update an element of an array with `with()`. The difference here is that this method takes 2 parameters. 

The first one is the index position of the element we want to change. The second one is the new value that we would like to give that element. Then a copt of the array is returned to us with the modifications.

```js
const colors = ["Red", "Blue", "Green", "Yellow"];

const updatedColors = colors.with(1, "Pink");

console.log(colors); // red, blue, green, yellow
console.log(updatedColors); // red, pink, green, yellow
```

[Back to top](#Lecture_Arrays_Loops_Functions)

### Properties of Arrays

Properties are just fixed values, in our case the property we are interested in is the `.length`-property. This property gives us the length, as a number, of the array to us. If we have five elements in an array, the value of length will be 5. 

```js
const colors = ["Red", "Blue", "Green", "Yellow"];

let length = colors.length; // here we just save the value to a variable, we don´t have to do this
console.log(length); // returns 4
console.log(colors.length); // returns 4
```

If we add or remove elements of the array, this value will update accordingly. 

### Static Methods

Let´s skip this for now. I will add content here later.

[Back to top](#Lecture_Arrays_Loops_Functions)

### Array Methods

A method is just a set of instructions that predefined and bundled inside a method. These instructions are usually very common and instead of us having to write the same code over and over, JS has created these methods for us to use whenever we want to. 

#### push(item1, item2, item...) => New length of array

Is used to add an element to the end of an existing array. It takes one or more parameters, and these parameters are the new elements to be added. It also returns something, and that something is the new length of the array.

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
number.push(9); // adds 9 to the end of the array "numbers"
console.log(numbers);

// if we want to keep the new length of array
let length = numbers.push(20);
console.log(length); // returns 10 since numbers.push returns the new length of array
```

[Back to top](#Lecture_Arrays_Loops_Functions)

#### pop() => the removed element

Is used to remove the last element of an array. The element that was removed is also returned by the method.

```js
const cities = ["Stockholm", "Malmö", "Höör", "Göteborg", "Lund"];

// remove the last element
cities.pop();
console.log(cities); // Lund will be gone now from cities
```

[Back to top](#Lecture_Arrays_Loops_Functions)

#### unshift(item1, item2, item...) => new length of array

Is used to add an element to the beginning of the array instead of the end. It also returns the new length of the array as a number.

```js
const cities = ["Stockholm", "Malmö", "Höör", "Göteborg", "Lund"];

// remove the last element
cities.unshift("Linköping");
console.log(cities); // Linköping is now added to the start of cities
```

[Back to top](#Lecture_Arrays_Loops_Functions)

#### shift() => the removed element

Is used to remove an element from the beginning of an array and returns that removed element.

```js
const cities = ["Stockholm", "Malmö", "Höör", "Göteborg", "Lund"];

// remove the last element
cities.shift("Linköping");
console.log(cities); // Stockholm is removed at the start of cities
```

[Back to top](#Lecture_Arrays_Loops_Functions)

#### includes(itemOfInterest) => boolean (true/false)

Is used to check if an item/element exists in an array or not. The parameter is the item/element we are looking for, and the return value is either true or false.

```js
const numbers = [2, 4, 6, 8, 10];

if (numbers.includes(6)){
    console.log("number 6 exists in the array");
} else {
    console.log("number 6 doesn´t exist in the array");
}

// This method makes it easier to look at the code
const nr8Exists = numbers.includes(8);
if (nr8Exists) {
    // do something
}
```

If you have more complex conditions in your if-checks, always try to store them in variables with readable names instead. It makes the code more readable and maintainable. 

[Back to top](#Lecture_Arrays_Loops_Functions)

#### indexOf(item1) => the index position OR -1 if it doesn´t exist

Is used to find an index position of a specific item/element inside the array. If it exists, the index is returned as a number, and if it doesn´t negative one `-1` is returned. Keep that in mind when using it in if checks. The only falsy value is 0 so -1 is still truthy.

```js
const cities = ["Stockholm", "Malmö", "Höör", "Göteborg", "Lund"];
const indexOfMalmo = cities.indexOf("Malmö");

console.log(cities); 
console.log(indexOfMalmo); // returns 1
```

If we try to get an index of an item that doesn´t exist, will return `-1`.

```js
const indexOfSkurup = cities.indexOf("Skurup");
console.log(indexOfSkurup); // returns -1
```

[Back to top](#Lecture_Arrays_Loops_Functions)

#### join() => a string including all the elements in the array

Is used to convert an array of elements to a string containing those elements. It doesn´t matter if it´s jsut number, strings or something else. The method always tries to convert everything into a long string. 

It also takes a parameter that is a character that will be used to separate the elements with. Can be an empty space, dash, underscore, or any other character. The separator is optional, hence the question mark in the syntax. 

```js
const cities = ["Stockholm", "Malmö", "Höör", "Göteborg", "Lund"];
const citiesAsString = cities.join(); 

console.log(cities); 
console.log(citiesAsString);
```

If we don´t specify a separator, per default, every element will be separated with a comma. 

```js
const cities = ["Stockholm", "Malmö", "Höör", "Göteborg", "Lund"];
const citiesAsString = cities.join(); // stockholm,malmö,höör,göteborg,lund
```

This is alright, but maybe we want an empty space instead between each element:

```js
const cities = ["Stockholm", "Malmö", "Höör", "Göteborg", "Lund"];
const citiesAsString = cities.join(" "); // stockholm, malmö, höör, göteborg, lund
```

In short, `join()` converts an array to a string and separates every element with a separator, that is predefined inside `join()`, `join(/)` - gives an / between the cities, for example. 

Or to understand it by name, we **join** the elements in an array to a string.

[Back to top](#Lecture_Arrays_Loops_Functions)

#### splice(start, deleteCount, item1?, item2?, item...?) => 

`?` means it´s an optional parameter.

The splice method lets us modify the content of an array on any given index position. 

It takes several parameters. The first one is the index on which we would like to start our modifications. 

The next one is the delete count, how many elements do we want to delete? If we don´t want to delete anything, we just assign 0 to this parameter. If we delete something, it will start deleting from the `start` parameter. In other words, the index position we assign to `start`.

The third one (or more) is the new items/elements we would like to add to the array.

[Back to top](#Lecture_Arrays_Loops_Functions)

#### slice() => 

[Back to top](#Lecture_Arrays_Loops_Functions)

## Loops

### While Loop

### Do-while Loop

### For-loop with index

### For..of-loop

### For..in-loop

## Functions

### Create functions

### Functions with parameters

### Functions with return value

### Function with both
