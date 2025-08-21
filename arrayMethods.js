// Array is and ordered collection, where we have a 1st, 2nd and a 3rd element and so on.
// For example, we need that to store a list of something: users, goods, HTML Elements.

// Simple methods:
// - shift
// Extracts the first element of the array and returns it:
let fruits = ["Apple", "Orange", "Pear"];
alert(fruits.shift()); // remove Apple and alert it
alert(fruits); // Orange, Pear

// - unshift
// Add the element to the beginning of the array:
let fruits1 = ["Orange", "Pear"];

fruits1.unshift("Apple");

alert(fruits1); // Apple, Orange, Pear
// Methods push and unshift can add multiple elements at once

// The concat() method of Array instances is used to merge two or more arrays.
// This method does not change the existing arrays, but instead returns a new array.
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);
console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]

// The fill() method of Array instances changes all elements within a range of indices in an array to a static value.
// It returns the modified array.
const array = [1, 2, 3, 4];
// Fill with 0 from position 2 until position 4
console.log(array.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]
