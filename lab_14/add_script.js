/* Написати функцію,
яка приймає об'єкт і повертає його ключі у вигляді масиву. */

function arr_keys(obj) {
   let keys = [];
   for (let key in obj) {
      keys.push(key);
   }
   return keys;
}
let user = { 
   name: "Поліна", 
   age: 18, 
   city: "Кривий Ріг" 
};
console.log(arr_keys(user));