/* Використати
SessionStorage для збереження позиції скролу сторінки. */

window.addEventListener("load", () => {
  const scrollPosition = sessionStorage.getItem("scrollY");
  if (scrollPosition !== null) {
    window.scrollTo(0, parseInt(scrollPosition));
  }
});

window.addEventListener("scroll", () => {
  sessionStorage.setItem("scrollY", window.scrollY);
});