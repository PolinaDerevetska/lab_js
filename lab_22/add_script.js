/* При зміні checkbox —
змінювати стиль іншого елемента. */

const checkbox = document.getElementById("style");
const text = document.getElementById("text");
checkbox.addEventListener("change", () => {
   if (checkbox.checked) {
      text.style.color = "blue";
      text.style.fontWeight = "bold";
   } else {
      text.style.color = "black";
      text.style.fontWeight = "normal";
   }
});