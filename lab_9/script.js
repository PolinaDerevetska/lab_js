const arr_lenght = arr => arr.map(str => str.length);
let words = ["apple", "banana", "kiwi"];
let lengths = arr_lenght(words);
console.log(lengths);