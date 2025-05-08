const button = document.querySelector(".hover-btn");
const message = document.querySelector(".message");
button.addEventListener("mouseover", () => {
   message.style.display = "block";
});
button.addEventListener("mouseout", () => {
   message.style.display = "none";
});