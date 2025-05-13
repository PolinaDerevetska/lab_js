/* Реалізувати клас Тварина,
створити від нього кілька екземплярів. Додати метод говорити() для
класу Тварина, який буде перевизначатися у підкласах. */

class Animal {
   constructor(name) {
      this.name = name;
   }
   speak() {
      console.log(`${this.name} нічого не каже...`);
   }
}
class Cat extends Animal {
   speak() {
      console.log(`${this.name} каже: Мяу!`);
   }
}
class Dog extends Animal {
   speak() {
      console.log(`${this.name} каже: Гав!`);
   }
}

let animal = new Animal("Невідома тваринка");
let cat = new Cat("Мурчик");
let dog = new Dog("Бобік");
animal.speak();
cat.speak();
dog.speak();