/* Написати програму, яка знаходить
мінімальне та максимальне значення в масиві. 
// Приклад масиву 
const numbers = [12, 5, 8, 21, 3, 18]; */

const numbers = [12, 5, 8, 21, 3, 18];
let min = Math.min(...numbers);
let max = Math.max(...numbers);
console.log(min);
console.log(max);
