// const person = {
//     firstname : 'chaitanya',
//     lastname : 'wankhede',
//     age : 23,
//     // hobbies : ['music','movies','traveling'],
//     hobbies : "music, movies, traveling",

//     address : {
//         city : 'chandrapur',
//         state : 'maharashtra',
//         pin_code : 442401
//     }
// };

// console.log(person);


// person.email = "chaitanyawankhede32954agmail.com";

// console.log(person.firstname, person.hobbies.split(','), person.address.pin_code);

// console.log(person);

const todos = [
    {
        task_no : 1,
        task : "take out trash",
        statuss : true
    },
    {
        task_no : 2,
        task : "go to institute",
        statuss : true
    },
    {
        task_no : 3,
        task : "doctor appointment",
        statuss : false
    }
];

// console.log(todos[1].task);


// console.log(JSON.stringify(todos));

// for (let i=0; i < todos.length ; i++) {
//     console.log(todos[i].task_no);
// }

// for (let i of todos) {
//     console.log(i.task)
// };


// todos.forEach(todo => console.log(todo));
    


// // console.log(todos[2].task);

// // const rohit = todos.filter(function(todos){
// //     return todos.statuss === false
// // }).map(function(todos){
// //     return todos.task
// // });

// // console.log(rohit);

// const createUser = (name, age) => ({ name, age });

const numbers = [2, 4, 6, 8, 10];
// console.log(createUser('chaitanya', 23));

// const doubled = numbers.map(n => {
//     return n * 2;
// });
// console.log(doubled); // [2, 4, 6, 8, 10]


// co

const values = [123, 'Hello', [1, 2, 3], { a: 1 }];
values.forEach(value => {
    return Array.isArray(value);
    // false, false, true, false
});

// const type = values.forEach(x => console.log(Array.isArray(x)));