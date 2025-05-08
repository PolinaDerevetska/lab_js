let students = [
   { name: "Поліна" },
   { name: "Аріадна" },
   { name: "Ліза" }
];
let presence = students.map(person => {
   return {
      ...person,
      student: true
   };
});
console.log(presence);