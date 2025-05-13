/* Додати
можливість видалити елемент списку при натисканні на нього. */

const listItems = document.querySelectorAll("#myList li");
listItems.forEach(item => {
   item.addEventListener("click", () => {
      item.remove();
   });
});