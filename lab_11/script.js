function product(name, price) {
   this.name = name;
   this.price = price;
}
product.prototype.sale = function(percent) {
   let newPrice = this.price - (this.price * percent / 100);
   return newPrice;
};
let product1 = new product("Навушники", 1000);
console.log(product1.sale(35));