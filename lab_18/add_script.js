/* Відфільтрувати масив слів, залишивши лише ті, що
починаються на певну літеру. */

let words = [
   "apple", "banana", "avocado", "cherry", "apricot",
   "blueberry", "grape", "lemon", "mango", "peach",
   "plum", "raspberry"
];
let letter = "p";
let filtered = words.filter(word => word.startsWith(letter));
console.log(filtered);