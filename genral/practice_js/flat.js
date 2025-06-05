// flat function example
const nestedArray = [1, 2, [3, 4, [5, 6]], 7, 8];

const flattenedArray = nestedArray.flat(2);

console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
console.log(nestedArray);
