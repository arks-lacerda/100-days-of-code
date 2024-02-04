// console.log(window);

// console.log(Object.getOwnPropertyNames(window));

// Local Storage Methods
// setItem(): Add key and value to localStorage
// getItem(): This is how you get items form localStorage
// removeItem(): Remove an item by key from localStorage
// clear(): Clear all localStorage
// key(): Passed a number to retrieve the key of a localStorage

// window.localStorage.setItem("key", "value");
window.localStorage.setItem('firstName', 'Arthur');
localStorage.setItem('lastName', 'Lacerda');

const person = {
  fullName: 'Arthur Santos Ribeiro Lacerda',
  location: 'Brazil',
};

localStorage.setItem('user', JSON.stringify(person));

const user = JSON.parse(localStorage.getItem('user'));

console.log(user.fullName);

const fruits = ['Pineapple', 'Mango', 'Pawpaw'];

localStorage.setItem('fruits', JSON.stringify(fruits));
const newFruits = JSON.parse(localStorage.getItem('fruits'));
console.log(newFruits[0]);

localStorage.removeItem('firstName');

// localStorage.clear();
console.log(localStorage.key(1));
