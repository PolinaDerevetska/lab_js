/* Перетворити масив рядків у масив об'єктів із
властивістю length. */

let string = ["apple", "banana", "kiwi"];
let result = string.map(str => ({
   length: str.length
}));
console.log(result);