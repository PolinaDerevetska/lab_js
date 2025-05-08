let users = [
   { id: 1, name: "Поліна" },
   { id: 2, name: "Аріадна" },
   { id: 3, name: "Ліза" }
];
let result = users.reduce((acc, user) => {
   acc[user.id] = user.name;
   return acc;
}, {});
console.log(result);