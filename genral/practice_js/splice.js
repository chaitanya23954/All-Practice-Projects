// splice function example
const numbers = [1, 2, 3, 4, 5];

// Remove elements starting from index 2, and insert 'a', 'b', 'c'
// const removedElements = numbers.splice(2, 3, 'a', 'b', 'c');

// console.log(numbers); // Output: [1, 2, 'a', 'b', 'c']
// console.log(removedElements); // Output: [3, 4, 5]


const removeele = numbers.splice(2,3,'a','b','d',"c");

console.log(numbers);
console.log(removeele);