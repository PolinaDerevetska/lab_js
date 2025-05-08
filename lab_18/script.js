let arr = [1, null, "текст", undefined, 0, false, null];
let cleaned = arr.filter(item => item !== null && item !== undefined);
console.log(cleaned);