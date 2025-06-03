// Вивести всі вівторки поточного місяця.

const list = document.getElementById("tuesdayList");
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth();
let date = new Date(year, month, 1);

while (date.getMonth() === month) {
   if (date.getDay() === 2) {
      const li = document.createElement("li");
      li.textContent = date.toDateString();
      list.appendChild(li);
   }
   date.setDate(date.getDate() + 1);
}