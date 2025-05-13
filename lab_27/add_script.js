/* Зробити кнопку,
яка змінює текст із використанням тротлінгу. */

const btn = document.getElementById("throttleBtn");
const txt = document.getElementById("text");
let ready = true;
btn.addEventListener("click", () => {
   if (!ready) return;
   ready = false;
   txt.textContent = "Текст змінено";
   setTimeout(() => {
      ready = true;
   }, 2000);
});