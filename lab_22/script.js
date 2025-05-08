const list = document.querySelector(".myList");
const button = document.querySelector(".delete");
button.addEventListener("click", () => {
  if (list.lastElementChild) {
      list.removeChild(list.lastElementChild);
  }
});