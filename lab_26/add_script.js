/* При подвійному кліку (dblclick) змінювати текст
елемента. */

const textElement = document.getElementById("myText");
textElement.addEventListener("dblclick", () => {
   textElement.textContent = "Текст змінено!";
});