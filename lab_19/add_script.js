/* Підрахувати кількість парних
та непарних чисел у масиві. */

let numbers = [3, 4, 7, 11, 15, 22, 31, 44];
let counts = numbers.reduce((acc, num) => {
   if (num % 2 === 0) {
      acc.p++;
   } else {
      acc.np++;
   }
   return acc;
}, { p: 0, np: 0 });
console.log("Парних чисел:", counts.p);
console.log("Непарних чисел:", counts.np);