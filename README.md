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

index, with

### Properties of Arrays

### Static Methods

### Array Methods

push, pop, unshift, shift, includes, indexOf, join, splice, slice

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
