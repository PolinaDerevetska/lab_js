const searchInput = document.getElementById("searchInput");
const result = document.getElementById("result");
let timeout;
function debounce(func, delay) {
   return function() {
      clearTimeout(timeout);
      timeout = setTimeout(func, delay);
   };
}
function search() {
   result.textContent = `Шукаємо: "${searchInput.value}"`;
}
searchInput.addEventListener("input", debounce(search, 500));