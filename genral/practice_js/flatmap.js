// // flatMap function example
// const numbers = [1, 2, 3, 4];

// const mappedArray = numbers.flatMap(num => [num, num * 2]);

// console.log(mappedArray); // Output: [1, 2, 2, 4, 3, 6, 4, 8]


const numbers = [1,2,3,4,5];

const mappedarray = numbers.flatMap(num => [num, num * 2]);

console.log(mappedarray);

const fruits = ['apple', 'banana', 'orange'];
const tast = fruits.map(a => a + ' is tasty');
console.log(tast);
