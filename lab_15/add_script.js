/* Реалізувати лічильник на
основі замикання. */

function createCounter() {
   let count = 0;
   return function () {
      count++;
      console.log("Лічильник:", count);
   };
}
const counter = createCounter();
counter();
counter();
counter();
counter();
counter();
counter();