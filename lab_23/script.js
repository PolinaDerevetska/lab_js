const container = document.querySelector(".table");
const table = document.createElement("table");
let number = 1;
for (let i = 0; i < 3; i++) {
   const row = document.createElement("tr");
   for (let j = 0; j < 3; j++) {
      const column = document.createElement("td");
      column.textContent = number++;
      row.appendChild(column);
   }
   table.appendChild(row);
}
container.appendChild(table);