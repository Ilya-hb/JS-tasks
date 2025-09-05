## Task: Who Likes It?

You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items.
We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

### Examples:

```js
likes([]) ➞ "no one likes this"
likes(["Peter"]) ➞ "Peter likes this"
likes(["Jacob", "Alex"]) ➞ "Jacob and Alex like this"
likes(["Max", "John", "Mark"]) ➞ "Max, John and Mark like this"
likes(["Alex", "Jacob", "Mark", "Max"]) ➞ "Alex, Jacob and 2 others like this"
```

### Notes:

- For 4 or more names, the number in "and 2 others" simply increases.
- If the input is not an array, return `"Invalid input"`.

### Starter Code (without solution):

```js
function likes(names) {
  // your code here
}
```

### Example Test Cases:

```js
console.log(likes([])); // "no one likes this"
console.log(likes(["Peter"])); // "Peter likes this"
console.log(likes(["Jacob", "Alex"])); // "Jacob and Alex like this"
console.log(likes(["Max", "John", "Mark"])); // "Max, John and Mark like this"
console.log(likes(["Alex", "Jacob", "Mark", "Max"])); // "Alex, Jacob and 2 others like this"
console.log(likes(["A", "B", "C", "D", "E"])); // "A, B and 3 others like this"
console.log(likes("Peter")); // "Invalid input"
```
