// const sayHello = function() {
//     console.log('Hello')
// }
// sayHello();

// Arrow function
// const sayHello = () => {
//     console.log('Hello');
// }
// sayHello();

// One word arrow function doesnt need braces
// const sayHello = () => console.log('Hello');
// sayHello();

// In the case of one line return
// const sayHello = () => 'Hello'
// console.log(sayHello());
    // instead of doing this
// const sayHello = function() {
//     return 'Hello'
// }
// console.log(sayHello());

//In the case of returning object
// const sayHello = () => ({msg: 'Hello'})
// console.log(sayHello())
    // instead of
// const sayHello = function() {
//     return {msg: 'Hello'}
// }
// console.log(sayHello())

// In the case of parameter: Single parameter: doesnt need parenthesis
// const sayHello = name => console.log(`Hello my name is ${name}`)
// sayHello('Brad');
    // instead of 
// const sayHello = function(name) {
//     console.log(`Hello my name is ${name}`)
// }
// sayHello('Brad');

// Multiple parameters need parenthesis
// const sayHello = (firstName, lastName) => console.log(`My name is ${firstName} ${lastName}`)
// sayHello('Samuel', 'Odiase')
    // Instead of 
// const sayHello = function(firstName, lastName) {
//     console.log(`My name is ${firstName} ${lastName}`)
// }
// sayHello('Samuel', 'Odiase')

// Map function: Takes in an array and displays a diffrent array output
const users = ['Samuel', 'Peter', 'Ofure', 'Mama']

// const nameLengths = users.map(function(name) {
//   return name.length;
// });

// Shorter
// const nameLengths = users.map((name) => {
//     return name.length
// });

// Shortest
const nameLengths = users.map(name => name.length)


console.log(nameLengths);
