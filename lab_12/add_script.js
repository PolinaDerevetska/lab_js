/* Реалізувати функцію, що приймає
перший параметр, а решту об'єднує у рядок. */

function combine(first, ...rest) {
   return first + " " + rest.join(" ");
}

let result = combine("Текст", "для", "перевірки", "роботи", "коду");
console.log(result);