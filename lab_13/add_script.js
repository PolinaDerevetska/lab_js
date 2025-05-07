/* Створити новий
масив, додавши елемент у середину існуючого масиву. */

let arr = [6, 34, 23, 95, 467, 37];
let new_arr = [...arr];
new_arr.splice(2, 0, "element");
console.log(new_arr);