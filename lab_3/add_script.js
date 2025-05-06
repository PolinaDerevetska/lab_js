/* Функція add повинна вміти складати три числа та виводити результат у консоль. 
Додай функції add три параметри a, b і c, які отримуватимуть значення аргументів під час її виклику.
Доповнить console.log()так, щоб він логував рядок "Addition result equals <result>", 
де <result>це сума переданих чисел. */

function add(a, b, c) {
   let result = a + b + c;
   console.log(`Addition result equals ${result}`);
   }
   add(15, 27, 10);
   add(10, 20, 30);
   add(5, 10, 15);