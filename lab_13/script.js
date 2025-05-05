let user1 = {
   name: "Поліна",
   age: 18,
   city: "Кривий Ріг"
};
let user2 = {
   ...user1,
   name: "Каріна",
   age: 22,
   city: "Кривий Ріг"
};
let combined = {...user1, ...user2};
console.log(combined);