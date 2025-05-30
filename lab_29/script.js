const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const form = document.getElementById("userForm");

window.addEventListener("load", () => {
   nameInput.value = sessionStorage.getItem("name") || "";
   emailInput.value = sessionStorage.getItem("email") || "";
});

nameInput.addEventListener("input", () => {
   sessionStorage.setItem("name", nameInput.value);
});

emailInput.addEventListener("input", () => {
   sessionStorage.setItem("email", emailInput.value);
});

form.addEventListener("submit", (e) => {
   e.preventDefault();
   alert("Дякуємо за реєстрацію!");
   sessionStorage.clear();
   form.reset();
});