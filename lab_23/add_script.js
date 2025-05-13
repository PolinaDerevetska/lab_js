/* Змінити атрибути
зображення (src, alt) через кнопку. */

const image = document.getElementById("myImage");
const button = document.getElementById("changeBtn");
button.addEventListener("click", () => {
   image.src = "https://images.theconversation.com/files/625049/original/file-20241010-15-95v3ha.jpg?ixlib=rb-4.1.0&rect=12%2C96%2C2671%2C1335&q=45&auto=format&w=1356&h=668&fit=crop";
   image.alt = "Бобік";
});