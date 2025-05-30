const cart = [
   { id: 1, name: "Ноутбук", price: 20000 },
   { id: 2, name: "Мишка", price: 500 },
   { id: 3, name: "Клавіатура", price: 1500 }
];
localStorage.setItem("cart", JSON.stringify(cart));
const savedCart = JSON.parse(localStorage.getItem("cart"));
console.log(savedCart);
if (localStorage.getItem("cart")) {
  console.log("Кошик знайдено");
} else {
  console.log("Кошик порожній");
}
