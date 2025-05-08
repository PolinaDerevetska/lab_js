class Car {
   constructor(brand) {
      this.brand = brand;
   }
}
class ElectroCar extends Car {
   charge() {
      console.log(`${this.brand} заряджається`);
   }
}
let car = new ElectroCar("Audi");
car.charge();