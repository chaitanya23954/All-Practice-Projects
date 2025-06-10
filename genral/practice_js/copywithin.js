// copyWithin function example
const numbers = [1, 2, 3, 4, 5];

// Copy elements from index 0 to index 2, to index 3
numbers.copyWithin(3, 0, 2);

console.log(numbers); // Output: [1, 2, 3, 1, 2]
